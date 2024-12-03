import { FC } from "react";
import { motion } from "motion/react";
import { AgentModal } from "@/components/agent-modal";
import { User2 } from "lucide-react";
import {
  Card,
  CardContent,
  // CardDescription,
  // CardFooter,
  // CardHeader,
  // CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type AgentType } from "../App";
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
export const AgentCard: FC<{ agent: AgentType }> = ({ agent }) => {
  return(
  <motion.div
    variants={agentCardAnimation}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="w-16 h-16 mr-4">
            <AvatarImage src={agent.pictureUrl} alt={`${agent.name} image`} />
            <AvatarFallback>
              <User2 />
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{agent.name}</h2>
          </div>
        </div>

        <AgentModal agent={agent} />
      </CardContent>
    </Card>
  </motion.div>);
};
