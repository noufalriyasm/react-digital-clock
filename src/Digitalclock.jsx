import React,{useState,useEffect} from "react";

function Digitalclock(){

    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=>{
            clearInterval(interval);
        }

    },[])


    function formatTime(){
        let hours=time.getHours();
        let minutes=time.getMinutes();
        let seconds=time.getSeconds();
        let meridian=hours>=12 ? "PM" :"AM";

        hours=hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridian}`
    }
// if numbers less than 10 it we need a zero infront of the number//
    function padZero(number){
        return (number<10 ? "0":"")+ number;

    }


    return(
        <div className="container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );

}
export default Digitalclock