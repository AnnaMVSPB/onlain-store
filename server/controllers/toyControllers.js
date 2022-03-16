
const path = require('path');
const { Type,Toy} = require('../db/models');


const addToy = async (req,res)=>{
  
  // try {
  //   const existingName = await Toy.findOne({ where: { name:newName } });
  //   if (existingName) {
  //     res.status(403).json({ type: false, message: 'Такой товар уже существует.' });
  //   } else {
  //     const typeId= await Type.findOne({ where: { name:type } });
  //     const toy = await Toy.create(
  //       {name:newName,
  //       price,
  //       img:fileName,
  //       type_id:typeId.id
  //       });
  //     res.status(201).json({ type: true});
  //   }
  // } catch (err) {
  //   res.status(500).json({ err, message: 'Ошибка занесения данных' });
  // }
}
module.exports = {addToy};
