import {FC, useContext} from "react";
import {myContext} from "../App";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";
  import { Star, User2, MapPin, Phone, Mail } from 'lucide-react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge"
 
  import {Button} from "@/components/ui/button"
  import {useParams, useNavigate} from "react-router";
 const AgentProfile: FC = () => {
    const {agents} = useContext(myContext)
    const {id} = useParams();
    const navigate = useNavigate();

    const agent = agents.find(agt => {
        return agt.id === Number(id)
    });
    if(!agent) {
        return <main className=" min-h-dvh px-[5%] pb-8 pt-[100px] w-full flex flex-col gap-4 items-center justify-center">
        <h1 className="font-cinzel font-black text-xl sm:text-3xl">
            No agents found
        </h1>
        <p>
        Try adjusting your url or check back later.
        </p>
        <Button onClick={() => navigate("/")}>GO HOME</Button>
    </main>
    }
  return (
    <main className="min-h-dvh px-[5%] pb-8 pt-[100px] gap-y-8 gap-x-[5%]  w-full flex-wrap  flex ">
        <section className="w-full md:w-[28%]">
        <Card className="w-full">
              <CardContent className=" flex ">
                <div className="w-full pt-4 flex flex-col items-center gap-4">
                 
                    <Avatar className="w-[120px] h-[120px]" >
        <AvatarImage src={agent.pictureUrl} alt={`${agent.name} image`} />
        <AvatarFallback><User2 className="w-[160px] aspect-square"/></AvatarFallback>
        </Avatar>
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-lg font-cinzel text-center font-black">{agent.name}</h2>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <p className="flex items-center">{agent.rating} <span className="ml-1 ">({agent.completedDeliveries})</span></p>
                    </div>
                    <Badge className="mt-1">
                    {agent.vehicleType === 'van' ? "Van" : "Bike" } Courier
                    </Badge>
                    </div>

                    <a href={agent.whatsappLink}  target="_blank" rel="noopener noreferrer"className="w-full py-2 px-4 text-center text-white rounded bg-primary">Message</a>
                    
                 
                </div>
                
                
              </CardContent>
            </Card>
        </section>
        <section className="w-full md:w-[67%]">
        <Card className="w-full">
              <CardContent className=" pt-4 flex flex-col gap-6">
               <h1 className="text-2xl font-black font-cinzel" >
                About {agent.name}
               </h1>
               <div className="w-full flex flex-col gap-4">
<p>{agent.bio}</p>
<ul className="w-full flex items-center gap-4 flex-col">
    <li className="w-full  flex items-center ">
    <MapPin className="mr-2 text-muted-foreground"/> Service Area: {agent.areaOfOperation}
    </li>
    <li className="w-full  flex items-center ">
    <Phone className="mr-2 text-muted-foreground"/> {agent.phone}
    </li>
    <li className="w-full  flex items-center ">
    <Mail className="mr-2 text-muted-foreground"/> {agent.email}
    </li>
    
    
</ul>

               </div>
               <div className="flex flex-col gap-2">
                <h4 className="text-lg font-black font-cinzel">Languages</h4>
                <span className="w-full flex gap-2 flex-wrap items-center">
                {agent.languages.map(language => {
return  <Badge variant="secondary" key={language}>{language}</Badge>
                })}
                </span>
               </div>
               <div className="flex flex-col gap-2">
                <h4 className="text-lg font-black font-cinzel">Specialities</h4>
                <span className="w-full flex gap-2 flex-wrap items-center">
                {agent.specialties.map(specialties => {
return  <Badge variant="secondary" key={specialties}>{specialties}</Badge>
                })}
                </span>
               </div>

                
              </CardContent>
            </Card>
        </section>
    </main>
  )
}


export default AgentProfile;