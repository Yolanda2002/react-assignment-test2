import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';//用户验证

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true }
});

//用户验证 将候选密码与数据库中存储的密码进行比较
UserSchema.methods.comparePassword = async function (passw) { 
  return await bcrypt.compare(passw, this.password); 
}

//根据用户名查找用户
UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

//包含预保存挂钩,加salt和hash
UserSchema.pre('save', async function(next) {
  const saltRounds = 10; // You can adjust the number of salt rounds
  //const user = this;
  if (this.isModified('password') || this.isNew) {
    try {
      const hash = await bcrypt.hash(this.password, saltRounds);
      this.password = hash;
      next();
  } catch (error) {
     next(error);
  }

  } else {
      next();
  }
});

const passwordValidator = (password) => {
  let pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  password.match(pattern);;
}
UserSchema.path("password").validate(passwordValidator);

export default mongoose.model('User', UserSchema);
