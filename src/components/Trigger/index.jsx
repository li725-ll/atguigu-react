import logo from "../../assets/images/logo.png"
import "./index.less"

const Trigger = ()=>{
  return (
    <div className="trigger">
      <img src={logo} alt="logo"/>
      <span>管理系统</span>
    </div>
  );
}

export default Trigger;
