import { FC } from "react";
import "../Main/App.css"
import {Welcome,Progress,SalaryMoney,KeyBid} from "./Tools.tsx";

const App: FC = () => {
    return (
        <>
        <main>
            Title
        </main>
        <section>
            <div className="hp">
                
            </div>
            <SalaryMoney salary={1500000} />
            <div>{KeyBid({min:10,max:20})}
                <span></span>
            </div>
            assets
        </section>
        <section>
            <Welcome name="Алексей" />
          
            {Progress({ progress: 100 }, { salary: 500000 })}
          
        </section>
        <section>
            credits
            etc
            etc 
            etc 
        </section>
        </>
    )
};

export default App;