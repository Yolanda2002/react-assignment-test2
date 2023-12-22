import express from "express";

import playlistModel from "./playlistModel";

const router = express.Router();

// 根据用户id和电影id 添加播放列表
router.post("/add", async (req, res) => {
  try {
    if (!req.body.movieId) {
      return res
        .status(400)
        .json({ success: false, msg: "movieId is required." });
    }
    const user = req.user;
    // 添加播放列表
    await playlistModel.addPlaylist({
      username: user.username,
      movie_id: req.body.movieId,
    });
    res.status(200).json({ success: true, msg: "添加成功" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "服务器异常～" });
  }
});

// 根据用户id和电影id 删除播放列表
router.delete("/delete", async (req, res) => {
  try {
    if (!req.body.movieId) {
      return res
        .status(400)
        .json({ success: false, msg: "movieId is required." });
    }
    const user = req.user;
    // 删除播放列表
    await playlistModel.deletePlaylist({
      username: user.username,
      movie_id: req.body.movieId,
    });
    res.status(200).json({ success: true, msg: "删除成功" });
  } catch (error) {
    res.status(500).json({ success: false, msg: "服务器异常～" });
  }
});


// 根据用户id 获取播放列表
router.get("/list", async (req, res) => {
  try {
    const user = req.user;
    const results = await playlistModel.getPlaylistList(user.username);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ success: false, msg: "服务器异常～" });
  }
});

export default router;