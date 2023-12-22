import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
  username: { type: String, required: true },
  movie_id: { type: Number, required: true }
});


// 根据用户ID、和 电影ID 添加播放列表
PlayListSchema.statics.addPlayList = function (username, movie_id) {
  return this.create({ username: username, movie_id: movie_id });
};

// 根据用户ID、和 电影ID 删除播放列表
PlayListSchema.statics.deletePlayList = function (username, movie_id) {
  return this.remove({ username: username, movie_id: movie_id });
};


// 根据用户id 获取播放列表
PlayListSchema.statics.getPlayListList = function (username) {
  return this.find({ username: username });
};