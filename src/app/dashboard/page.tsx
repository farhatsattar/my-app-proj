
import Link from "next/link";

const Dashboard=()=>{

    return ( 
            <div className= "p-12   font-bold">Welcome To Homepage!
             <div>

            <p className="font-bold  bg-slate-600 text-lg">About


            </p>
              <p>  Hi, i am farhat .I am student of PIAIC.This is my first Next.js project.

             </p>
    
            </div>
            <div className="p-5 bg-pink-700 flex flex-col">
                <Link href={"/dashboard/analytics"}>Analytics</Link>
            <div>
                <Link href={"/dashboard/settings"}>settings</Link>
            <div>
                <Link href={"/dashboard/settings/profile"}>Profile</Link>
            <div>
                <Link href={"/dashboard/settings/password"}>password</Link>
                </div>
                </div>
                </div>
            
            </div>
            </div>
    
            )
}
export default Dashboard;