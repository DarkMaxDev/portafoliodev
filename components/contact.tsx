import { dataContact } from "@/data";
import Title from "./shared/title";
import Link from "next/link";

const Contact = () => {
    return (
        <div className="p-0 md:px-0 md:py-0 max-w-8xl mx-auto" id="contact">
            <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4"
                        >
                            {data.icon}
                            <p>{data.title}</p>
                            <p>{data.subtitle}</p>
                            <Link href={data.link} target="_blank">
                                Enviar mensaje
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default Contact;