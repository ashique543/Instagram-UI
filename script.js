timeout();

function timeout()
{
    var today= new Date();
    if(today.getHours()<=12)
    {
    var time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" AM";
    document.getElementById("timeset").innerHTML = time;
    }
else if(today.getHours()>12)
    {
    var time=today.getHours()-12+":"+today.getMinutes()+":"+today.getSeconds()+" PM";
    document.getElementById("timeset").innerHTML = time;
    }
setTimeout(timeout,1000);
}
