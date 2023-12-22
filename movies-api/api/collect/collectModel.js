import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CollectSchema = new Schema({
  username: { type: String, required: true },
  movie_id: { type: Number, required: true }
});

// 根据用户名和电影id查找
CollectSchema.statics.findByUsernameAndMovieId = function ({username, movie_id}) {
  return this.findOne({ username: username, movie_id: movie_id });
};

// 添加收藏
CollectSchema.statics.addCollect = function ({username, movie_id}) {
  return this.create({ username: username, movie_id: movie_id });
};

// 删除收藏 根据用户名和电影id
CollectSchema.statics.deleteCollect = function ({username, movie_id}) {
  return this.findOneAndDelete({ username: username, movie_id: movie_id });
};

// 根据用户名获取收藏列表，不需要分页
CollectSchema.statics.getCollectList = function (username) {
  return this.find({ username: username });
};

export default mongoose.model('Collects', CollectSchema);