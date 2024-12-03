import {FC, createContext} from "react";
import {Routess} from "./routess"
import {Navbar} from "./layout/navbar";
import lss from  "./assets/lss.jpg";
import simbi from  "./assets/simbi.jpg";
import city from  "./assets/city.jpg";
import ea from  "./assets/ea.jpg";
import samsucc from  "./assets/samsucc.jpg";
import adefem from  "./assets/adefem.jpg";
import ajolims from  "./assets/ajolims.jpg";
import campusdash from  "./assets/campusdash.jpg";
import crecemi from  "./assets/crecemi.jpg";
import deliva from  "./assets/deliva.jpg";
import easyget from  "./assets/easyget.jpg";
import funmihan from  "./assets/funmihan.jpg";
import premiumKourier from  "./assets/premium-kourier.jpg";
import miladeTaxicab from  "./assets/milade-taxicab.jpg";
import hanglobalExpress from  "./assets/hanglobal-express.jpg";
import aywiseFlit from  "./assets/aywise-flit.jpg";
import jfRoyale from  "./assets/jf-royale.jpg";
import jayantic from  "./assets/jayantic.jpg";
import elxpressLiason from  "./assets/elxpress-liason.jpg";
import sendSolution from  "./assets/send-solutions.jpg";
export type  AgentType =  {
  id: number;
  name: string;
  pictureUrl: string;
  whatsappNumber?: string;
  phoneNumber?: string;
}
type MyContextType ={
  agents: AgentType[]
}
export const myContext = createContext<MyContextType>({
  agents: []
})
const App: FC = ()=> {
 const agents: AgentType[] =  [
   
    {
        id: 1,
      name: "Simbi Logistics",
      pictureUrl: simbi,
      whatsappNumber: "+2349152438815"
    },
    {
      id: 2,
      name: "LSS Logistics",
      pictureUrl: lss ,
      phoneNumber: "+2349039580212"
  },
    {
      id: 3,

      name: "City Logistics",
      pictureUrl: city,
      whatsappNumber: "+2348169823074"
    },
    {
      id: 4,

      name: "EA Logistics",
      pictureUrl: ea,
      whatsappNumber: "+23407081635690"
    },
    {
      id: 5,

      name: "Send Solutions Logistics",
      pictureUrl: sendSolution,
      whatsappNumber: "+2348164928952"
    },
    {
      id: 6,

      name: "Samsucc Logistics",
      pictureUrl: samsucc,
      whatsappNumber: "+2348050450107"
    },
    {
      id: 7,

      name: "Elxpress Liaison and Logistics ",
      pictureUrl: elxpressLiason,
      phoneNumber: "+2349161174596"
    },
    {
      id: 8,

      name: "Jayantic Logistics ",
      pictureUrl: jayantic,
      whatsappNumber: "+2347079620228"
    },
    {
      id: 9,

      name: "JF Royale Logistics ",
      pictureUrl: jfRoyale,
      whatsappNumber: "+2348035534080"
    },
    {
      id: 10,

      name: "Hanglobal Express Logistics ",
      pictureUrl: hanglobalExpress,
      whatsappNumber: "+2347040254833"
    },
    {
      id: 11,

      name: "Aywise Flit Services ",
      pictureUrl: aywiseFlit,
      whatsappNumber: "+2348024096961"
    },
    {
      id: 12,

      name: "Easyget ",
      pictureUrl: easyget,
      whatsappNumber: "+2348051270059"
    },
    {
      id: 13,

      name: "Premium Kourier Services ",
      pictureUrl: premiumKourier,
      whatsappNumber: "+2348139104933"
    },
    {
      id: 14,

      name: "Deiva Logistics ",
      pictureUrl: deliva,
      whatsappNumber: "+2349073698775"
    },
    {
      id: 15,

      name: "Adefem Logistics ",
      pictureUrl: adefem,
      whatsappNumber: "+2348068830758"
    },
    {
      id: 16,

      name: "Funmihan Global",
      pictureUrl: funmihan,
      whatsappNumber: "+23470420354833"
    },
    {
      id: 17,

      name: "Campusdash ",
      pictureUrl: campusdash,
      whatsappNumber: "+2348142055662"
    },
    {
      id: 18,

      name: "Crecimi Logistics ",
      pictureUrl: crecemi,
      whatsappNumber: "+2349022027754"
    },
    {
      id: 19,

      name: "Milade Taxicab Logistics ",
      pictureUrl: miladeTaxicab,
      whatsappNumber: "+2348160777067"
    },
    {
      id: 20,

      name: "Ajolims Logistics ",
      pictureUrl: ajolims,
      whatsappNumber: "+2348138482789"
    },
 ]
  const values = {
    agents
  }
  return <div className="font-oswald">
    <myContext.Provider value={values}>
    <Navbar />
    <Routess/>
    </myContext.Provider>
  </div>
}

export default App;