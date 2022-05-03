import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Material.css";
const Material = (props) => {
  const { _id, name,  image  } = props.material;

 
  
  return (
    <div className="card">
      <img src={image} alt={name} />
     
      <p></p>
      <Button LinkComponent={Link} to={`/showmaterial/${_id}`} sx={{ mt: "auto" }}>
        Show 
      </Button>
      <Button LinkComponent={Link} to={`/materials/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
    
       
     

    </div>
  );
};

export default Material;