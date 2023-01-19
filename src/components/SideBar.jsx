    import React from "react";
import Logo from "./reusables/Logo";
    import SideBarTiles from "./reusables/SideBarTiles";

const sideBarList = [{image:"resources/dashboard.png",textName:"Dashboard"},{image:"",textName:"Transaction"},{image:"",textName:"Settlement"},{image:"",textName:"Support"},{image:"",textName:"API Doc"},{image:"",textName:"Customer Center"}];

function SideBar(){
    return <div className="container bg-gray-200 h-screen w-64 fixed top-0 left-0">
  <nav className="p-6">
    <Logo></Logo>
    <div className="flex"></div>

    {sideBarList.map(tiles => {
        return (
          <div key={tiles.textName} className="flex">
            <SideBarTiles textName={tiles.textName} image={tiles.image}></SideBarTiles>
          </div>
        );
      })}
  </nav>
</div>
}

export default SideBar;