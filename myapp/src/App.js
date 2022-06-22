import React,{useState,useEffect} from 'react'
import axios from 'axios'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Paper } from '@mui/material';




function App() {
  const [datas,setdatas]=useState("")
const[name,setname]=useState("")
const [tech,settech]=useState("")
console.log(name,tech,"hbljevouvruvfyrfyuvruy---------------->")

  useEffect(()=>{
    axios.get("http://localhost:8000/first/")
    .then(res=>{
      setdatas(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  },[])

  const Submit=(e)=>{
    e.preventDefault()
    if(name==""){
      alert("please enter name")
    }
    else{
    window.location.reload(false);
    axios.post("http://localhost:8000/first/post",{
      name
    })
    .then((res)=>{
     console.log(res,"respense Data ")
    })
    .catch((err)=>{
      console.log(err,"Error Occurce")
    })
  }

  }

  const HanleDelete=(id)=>{
    console.log(id,"id sumanth items post -->")
    window.location.reload(false);
    axios.delete(`http://localhost:8000/first/delete/${id}`)
    .then((res)=>{
     console.log(res,"delete Sucessfully")
    })
    .catch((err)=>{
      console.log(err,"Error Occurce")
    })
  }
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
    
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  if(datas){
  
    return(
     <div>
       <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO APP
          </Typography>
          <Button color="inherit">MERN-STACK</Button>
        </Toolbar>
      </AppBar>
     
<div style={{textAlign:"center",marginTop:"23px"}}>
      <TextField id="name"  type="text" style={{width:"400px"}} value={name} label="Outlined" variant="outlined"  onChange={(e)=>setname(e.target.value)}/> <Button variant="contained" color="success"  onClick={Submit} >Submit</Button>
      <br/><br/><br/>
      {datas.map(res =><div ><Paper style={{width:"370px",height:"110px",marginLeft:"595px"}} elevation={3}>
        <div>
          <h4 style={{color:"red",textAlign:"center"}}>Todo Name</h4>
        {res.name}
        <br/><Button style={{marginLeft:"182px"}} variant="outlined" color="error" onClick={()=>HanleDelete(res._id)}>delete</Button>
        </div>
      
    </Paper>
       </div>)}

  
      
     
       </div>

     </div>
    

    )
  }
  return (
    <div >
      <h1>Loading.....</h1>
    </div>
  );
}

export default App;
