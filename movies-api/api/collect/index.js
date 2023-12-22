import express from 'express';
import Collect from './collectModel';

const router = express.Router();

// 根据用户id和电影id添加收藏
router.post('/add', async (req, res) => {
    try {
        if (!req.body.movieId) {
            return res
                .status(400)
                .json({ success: false, msg: 'movieId is required.' });
        }
        const user = req.user;
        const existingMovie = await Collect.findByUsernameAndMovieId({
            username: user.username,
            movie_id: req.body.movieId,
        });

        if (existingMovie) {
          return res.status(400).send({ message: '该电影已被收藏' });
        }
        // 添加收藏
        await Collect.addCollect({
            username: user.username,
            movie_id: req.body.movieId,
        });
        res.status(200).json({ success: true, msg: '添加成功' });
    } catch (error) {
        res.status(500).json({ success: false, msg: error });
    }
});

// 根据用户id和电影id删除收藏
router.delete('/delete', async (req, res) => {
    try {
        if (!req.body.movieId) {
            return res
                .status(400)
                .json({ success: false, msg: 'movieId is required.' });
        }
        const user = req.user;
        // 删除收藏
        await Collect.deleteCollect({
            username: user.username,
            movie_id: req.body.movieId,
        });
        res.status(200).json({ success: true, msg: '删除成功' });
    } catch (error) {
        res.status(500).json({ success: false, msg: '服务器异常～' });
    }
});

// 根据用户id 获取
router.get('/list', async (req, res) => {
    try {
        const user = req.user;
        const results = await Collect.getCollectList(user.username);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ success: false, msg: '服务器异常～' });
    }
});

export default router;