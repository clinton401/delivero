import {FC} from 'react';
import {Link} from "react-router";
import {Button} from "@/components/ui/button"
const ApplyAsAgent: FC =()=> {
    return <main className="w-full min-h-dvh flex flex-col items-center px-[5%] pt-[100px] pb-8 justify-center gap-4">


        <h1 className="font-cinzel font-black text-center text-3xl">
        🚧 Page Under Construction 🚧
        </h1>
        <p className="text-center"> We're working hard to bring this page to life. Stay tuned for updates!</p>

        <Button asChild>
            <Link to="/">Go Back Home</Link>
        </Button>
    </main>
}

export default ApplyAsAgent