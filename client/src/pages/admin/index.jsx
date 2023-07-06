import {useEffect} from "react"
import './index.module.less'

function Admin(props) {
  useEffect(()=>{
    console.log(props)
    props.history.push('/login');
  },[])
  return (
    <div>
      Admin
    </div>
  );
}

export default Admin;
