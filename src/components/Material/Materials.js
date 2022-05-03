import React, { useEffect, useState } from "react";
  import axios from "axios";
  import Material from "./Material";
  const URL = "https://mern-test-beginners-123.herokuapp.com/materials";

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  };
  
  const Materials = () => {
    const [materials, setMaterials] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setMaterials(data.materials));
    }, []);
    console.log(materials);
    return <div>
       <ul>
        {materials && materials.map((material, i) => (
            <li key={i}>
              <Material material={material} />
            </li>
          ))}
      </ul>
    </div>
  };
  
  export default Materials;