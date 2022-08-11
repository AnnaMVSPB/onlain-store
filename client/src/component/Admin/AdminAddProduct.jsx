import React, { useState } from 'react';

function AdminAddProduct() {

  const [imgPaths, setImgPaths] = useState([]);
  console.log(imgPaths);

  const sendFiles = async (e) => {
  
    const picturesData = [...e.target.files];

    try {
      const url = 'http://localhost:7000/api/admin/addProduct/img';

      const data = new FormData();
      picturesData.forEach((img) => {
        data.append('homesImg', img);
      });


      const options = {
        method: 'POST',
        body: data,
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((imgPath) => setImgPaths(imgPath));
    } catch (error) {
    }
  }

  const mailF = async (e)=>{
    e.preventDefault()
    const data={
      name:e.target.name.value,
      fem : e.target.fem.value
    }
    console.log(data)
    fetch('http://localhost:7000/api/admin/eemail',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:  JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((d) => console.log(d));
  }
  return (
    <>
    <form>
      <input type="file" multiple onChange={sendFiles} />
      <button type="submit">++++++++++++++</button>
    </form>


<form onSubmit={mailF}>
  <input name='name'/>
  <input name='fem'/>
  <button type='submit'>mail</button>
</form>
    </>
  );
}

export default AdminAddProduct;
