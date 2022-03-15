const { Type } = require('../db/models');

const addType = async (reg,res)=>{
  const {name}= reg.body;
  let newName = name[0].toUpperCase() + name.slice(1);
  try {
    const existingName = await Type.findOne({ where: { name:newName } });
    if (existingName) {
      res.status(403).json({ type: false, message: 'Такой тип товара уже существует.' });
    } else {
      const type = await Type.create({name:newName});
      res.status(201).json({ type: true});
    }
  } catch (err) {
    res.status(500).json({ err, message: 'Ошибка занесения данных' });
  }
}
const allType = async (reg,res)=>{
  try {
    const type = await Type.findAll();
    res.status(200).json(type);
  } catch (error) {
    res.status(404).json({ error: 'error' });
}
}


module.exports = {addType,allType};
