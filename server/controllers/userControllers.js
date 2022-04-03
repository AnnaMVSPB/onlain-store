const { User } = require('../db/models');

const regUser = async (req, res) => {
  const {email, password}= req.body;
  try {
    const emailUser = await User.findOne({ where: { email: email} });
    if (emailUser) {
      res.status(403).json({ type: false, message: 'Такая почта уже существует.' });
    } else {
      const userCreate = await User.create({email, password,role:'user'});
      res.status(201).json(userCreate);
    }
  } catch (err) {
    res.status(500).json({ err, message: 'Ошибка занесения данных' });
  }
  res.status(201).json(userCreate);
}

const logUser = async (req, res) => {
  const {email, password}= req.body;
  try {
    const emailUser = await User.findOne({ where: { email: email} });
    if (!emailUser) {
      res.status(403).json({ type: false, message: 'Такого пользователя не существует.' });
    } else {
      res.status(201).json(emailUser);
    }
  } catch (err) {
    res.status(500).json({ err, message: 'Ошибка занесения данных' });
  }
  res.status(201).json(emailUser);
}


module.exports = { regUser,logUser };
