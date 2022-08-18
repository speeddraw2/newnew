import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Datatablee from "../../components/datatable/Datatablee";



const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          
          
          
        </div>
        <div className="charts">
         
         
        </div>
        <div className="listContainer">
          <div className="listTitle"></div>
          <Datatablee />
        </div>
      </div>
    </div>
  );
};

export default Home;