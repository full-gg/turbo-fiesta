import { Link } from "react-router-dom";
import { FC } from "react";
import "../Main/App.css"
import menu_map from '../img/menu_map.png'
import main_profile from '../img/profile_img/main_profile.png'
import {Welcome,Progress,SalaryMoney,KeyBid, Hp, ShowCount} from "./Tools.tsx";


const App: FC = () => {
    return (
        <>
        <main>
            <div className="title">
                CAPITAL QUEST
            </div>
        </main>
        <section className="menu_grid">
            <div className="hp"><Hp count={2} />  </div>
        
            <div className="profile">
                <img src={main_profile} alt="Main Profile" style={{width:"11rem"}}/>
                <Welcome name="Алексей" />
            </div>
            <div className="salary"><SalaryMoney salary={1500000} /></div>
            <div className="keybid">
                {KeyBid({min:10,max:20})}
                <span className="keybid_title">Ключевая ставка</span>
                </div>
            <div className="assets">assets</div>
  
        </section>
        <section>
            
          
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