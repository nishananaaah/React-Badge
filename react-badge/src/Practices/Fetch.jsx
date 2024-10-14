import React, { useState } from 'react'

const Fetch = () => {
  const [data,setData]=useState([])
  useEffect(() => {
    const fn = async () => {
      const response = await axios.get("http://localhost:3000/datas");
      setData(response.data);
    };
    fn();
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Fetch
