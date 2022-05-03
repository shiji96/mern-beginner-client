import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowMaterial = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  // const [checked, setChecked] = useState(false);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://mern-test-beginners-123.herokuapp.com/materials/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.material));
    };
    fetchHandler();
  }, [id]);

  return (
    <div>
      <div class="container">
        {inputs && (
          <div class="row" style={{ marginTop: 40 }}>
            <div class="col-sm-4">
              <img src={inputs.image} alt="" width={300} height={200} />
            </div>
            <div class="col-sm-4">
              <h3 class="font-weight-light">{inputs.name} </h3>
            

            </div>
            <div class="col-sm-4">&nbsp;</div>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default ShowMaterial;
