import {FC} from 'react';
import errorImg from "../assets/error.gif";
import {Link} from "react-router";
import {Button} from "@/components/ui/button"
const NotFound: FC =()=> {
    return <main className="w-full min-h-dvh flex flex-col items-center px-[5%] pt-[100px] pb-8 justify-center gap-4">

        <img src={errorImg} alt="error" className="w-[100px] aspect-square" />

        <h1 className="font-cinzel font-black text-center text-3xl">
        Oops! Page Not Found
        </h1>
        <p className="text-center">The page you're looking for doesn't exist or has been moved.</p>

        <Button asChild>
            <Link to="/">Go Back Home</Link>
        </Button>
    </main>
}

export default NotFound