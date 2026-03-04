import Image from "next/image";
import { MotionTransition } from "@/components/transition-component";

const Avatar = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 right-0 hidden md:inline-block md:absolute ">
            <Image
                src="/avatar2.png"
                alt="Avatar"
                width={400}
                height={400}
                className="w-full h-full"
            />
        </MotionTransition>
            
    );
} 

export default Avatar;