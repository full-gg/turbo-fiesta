import { FC } from "react";

type Salary = {
    salary: number;
}

const SalaryMoney: FC<Salary> = ({salary}) => {
    return <h1>your salary is {salary}</h1>
}

type KeyRandom = {
    min:number;
    max:number;
}



const KeyBid = ({ min, max }: KeyRandom) => {
    let k = []
    for (let i=0;i<2;i++){
        let c = Math.floor(Math.random() * (max - min) + min)
        k.unshift(c)
    }
    return [k[0]," ",k[0]-k[1]]

};

type WelcomeProps = {
    name: string;
}

const Welcome: FC<WelcomeProps> = ({name}) => {
    return <h1>Hi, {name}</h1>
}

type ProgressBar = {
    progress: number;
}

const Progress =  ({progress}:ProgressBar,{salary}:Salary) => {
    let purpose = 2000000
    let purpose_percent = ((salary/purpose)*100)
    return (
    <div className="progress_bar" style={{ color:"red", width: `${progress}%`, backgroundImage: `linear-gradient(90deg, black ${purpose_percent}%, white ${100 - purpose}%` }}>
        
      
    </div>
  );
}

export { Welcome, Progress, SalaryMoney, KeyBid };
