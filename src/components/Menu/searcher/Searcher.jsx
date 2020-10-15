import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../../../assets/styles/components/menu/searcher/Searcher.scss";
//import SearchDrop from './SearchDrop'

const Searcher = (props) => {
  //const [showSearch, setShowSearch] = useState(false)

  return (
    <div>
      <button className="btnSearch" onClick={props.click}>
        <SearchIcon style={{ color: "#FF8150", fontSize: "35px" }} />
      </button>
    </div>
  );
};
export default Searcher;
