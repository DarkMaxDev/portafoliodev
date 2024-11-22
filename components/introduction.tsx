import Link from "next/link";
import Image from "next/image";
import { Paperclip } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Container from "./shared/container";

const Introduction = () => {
    return (  
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello I am</h3>
                <h1 className="text-4xl fond-nold mb-3">DarkMaxDev</h1>
                <h2 className="text-2xl text-gray-400">Technical Support and Full Stack Developer</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants({ variant: 'secondary' })}
                            href="/Maximiliano.pdf"
                            target="_blank">
                            <Paperclip className="mr-2" /> Descargar CV 
                        </Link>
                    </div>
                    </div>
                    <center><Image src="/DarkMaxDev.jpg" alt="Profile pic" width={300} height={100} /></center>
                    
            </div>
        </Container>
    );
}
export default Introduction;