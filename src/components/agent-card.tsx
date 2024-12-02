import {FC} from "react";
import {motion} from "motion/react";
 
import { Star, Bike, Truck, User2 } from 'lucide-react'
import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
  } from "@/components/ui/card";
  import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
  import {Button} from "@/components/ui/button";
  import {useNavigate} from "react-router"
  import {type AgentType} from "../App"
const agentCardAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 100,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };
export const AgentCard: FC<{agent: AgentType}> = ({agent}) => {
    const navigate= useNavigate();
    const navigateHandler =() => {
        navigate(`/agent/${agent.id}`)
    }
    return <motion.div variants={agentCardAnimation} initial="hidden" whileInView="visible"  viewport={{ once: true, amount: 0.2 }}>
        <Card >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {/* <img src={agent.pictureUrl} alt={agent.name} className="w-16 h-16 rounded-full mr-4" /> */}
                  <Avatar className="w-16 h-16 mr-4">
      <AvatarImage src={agent.pictureUrl} alt={`${agent.name} image`} />
      <AvatarFallback><User2/></AvatarFallback>
    </Avatar>
                  <div>
                    <h2 className="text-xl font-semibold">{agent.name}</h2>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{agent.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="mb-2">Area: {agent.areaOfOperation}</p>
                <p className="mb-4">
                  Type: {agent.vehicleType === 'van' ?  <Truck className="inline h-5 w-5" /> : <Bike className="inline h-5 w-5" /> }
                </p>
                <Button className="w-full" onClick={navigateHandler}>View Profile</Button>
              </CardContent>
            </Card>
    </motion.div>
}