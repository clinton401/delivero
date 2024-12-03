import { FC } from "react";
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { type AgentType } from "../App";
import {Phone} from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
type AgentModalProps = {
  agent: AgentType;
};

export const AgentModal: FC<AgentModalProps> = ({
  agent
}) => {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="secondary" className="w-full">View Profile</Button>
    </DialogTrigger>
          <DialogContent  className="w-[300px]" >
          <div className="w-full pt-4 flex flex-col items-center gap-4">
                   
                    <img src={agent.pictureUrl} 
                        alt={`${agent.name} image`} className="w-[250px] object-contain h-[250px]"/>
                    <div className="flex flex-col items-center gap-1">
                      <h2 className="text-lg font-cinzel text-center font-black">
                        {agent.name}
                      </h2>

                      <div className="w-full flex-wrap gap-y-4 items-center justify-center divide-x-4 divide-background"></div>
                      {agent?.whatsappNumber && (
                        <a
                          href={`https://wa.me/${agent.whatsappNumber}?text=${encodeURIComponent("Delivery services needed")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center py-2 px-4 text-center text-foreground rounded bg-secondary"
                        >
                          <MdOutlineWhatsapp className="mr-1"/> Message
                        </a>
                      )}
                      {agent?.phoneNumber && (
                        <a
                          href={`tel:${agent.phoneNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-4 text-center text-foreground flex items-center justify-center rounded bg-secondary"
                        >
                          <Phone className="mr-1 h-4 w-4"/> Call
                        </a>
                      )}
                    </div>
                  </div>
       
    
          </DialogContent>
          </Dialog>
  );
};
