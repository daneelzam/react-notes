import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

const saltRounds = 10;
const router = express.Router();

router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = {
      email,
      username: user.username,
    };
    return res.json({
      user: req.session.user,
    });
  }
  return res.status(401).end();
});

router.post('/api/signup', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = new User({
      email,
      username,
      password: await bcrypt.hash(password, saltRounds),
    });
    await user.save();
    req.session.user = {
      email,
      username,
    };
    return res.json({
      user: req.session.user,
    });
  } catch (error) {
    return res.status(401).end();
  }
});

router.get('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.end();
  });
});

export default router;
