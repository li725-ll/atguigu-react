import logo from "../../assets/images/logo.png";
import "./index.less";

const LogoHeader = ({ collapsed })=>{
  if (collapsed){
    return (
      <div className="logo-header-collapsed">
        <img src={logo} alt="logo"/>
      </div>
    );
  }else {
    return (
      <div className="logo-header">
        <img src={logo} alt="logo"/>
        <span>管理系统</span>
      </div>
    );
  }
}

export default LogoHeader;
