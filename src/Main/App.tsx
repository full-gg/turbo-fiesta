import { Link } from "react-router-dom";
import { FC } from "react";
import "../Main/App.css"
import menu_map from '../img/menu_map.png'
import {Welcome,Progress,SalaryMoney,KeyBid, Hp} from "./Tools.tsx";


const App: FC = () => {
    return (
        <>
        <main>
            <div className="title">
                CAPITAL QUEST
            </div>
        </main>
        <section>
            <div>{Hp()}
                
            </div>
            <SalaryMoney salary={1500000} />
            <div>{KeyBid({min:10,max:20})}
               
            </div>
            assets
        </section>
        <section>
            <Welcome name="Алексей" />
          
            {Progress({ progress: 100 }, { salary: 100000 })}
          
        </section>
        <section>
            <Link to="/Map">
            <div className="map">
                <span className="map_title">Карта</span>
                <img src={menu_map} alt="" style={{width:"26rem", height:"11rem"}} />

            </div>
            </Link>
        </section>
        </>
    )
};

export default App;