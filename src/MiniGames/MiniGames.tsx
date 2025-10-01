import { Link } from "react-router-dom";

const Games = [
    {
        title: 'Main_profile',
        id: 1,
    },
    {
        title: 'Main_profile',
        id: 2,  
    },
    {
        title: 'Main_profile',
        id: 3, 
    },
    {
        title: 'Main_profile',
        id: 4,
    },
    {
        title: 'Main_profile',
        id: 5,
    },
    {
        title: 'Main_profile',
        id: 6,
    },
   
];

const MiniGames = () => {
    return( <>
        <div className="Game_grid" style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
        {Games.map((item) => (
    	<div key={item.id}>Games</div>   
        ))}
     </div>
        </>
    )
}

export default MiniGames