function checksspeedofthevehicle(speed){
 // Check if the speed is less than 70.
  let speedlimit = 70;
  let Demeritpoints = 5;
  let Demeritpointsthreshhold = 12;
  if (speed <= speedlimit ) {
    console.log("ok");
    return;

  }else {
    //The speed is greater than or equal to 70,so the driver gets one demerit point for every 5 km/s abov the speed limit.
    let excessspeed = speed - speedlimit
    let PPointss = Math.floor (speed / Demeritpoints )
    //If the driver gets more than 12 points,print "License terminated".
      if ( PPointss > Demeritpointsthreshhold ){
return "LICENSE TERMINATED"

      }else {
        return "Demeritpoints" + Demeritpoints
      }
  }
}
var speed =parseInt ("100")//input carspeed
checksspeedofthevehicle(speed)
console.log(checksspeedofthevehicle(speed))
