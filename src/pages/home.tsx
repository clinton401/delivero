import {FC, useContext} from "react";
import {myContext} from "../App";
import {AgentCard} from "@/components/agent-card"
const Home: FC =() => {
    const {agents} = useContext(myContext);
    return (
        <main className="min-h-dvh px-[5%] pb-8 pt-[100px]  w-full gap-y-8  flex flex-col ">
<h1 className="font-cinzel w-full text-center font-black text-xl sm:text-3xl">
Available Delivery Agents
</h1>

<section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
    {agents.map(agent => {
        return <AgentCard agent={agent} key={agent.id} />
    })}
</section>
        </main>
    )
}
export default Home