    import React from "react";

function SideBarTiles(props){
    return <div className="container bg-blue-900 rounded-md p-4 mt-2 tiles "> <a className="flex justify-left" href="#"><img className="mr-2" src={props.image} height={20} width={20} ></img> {props.textName} </a>  </div>
}

export default SideBarTiles;;