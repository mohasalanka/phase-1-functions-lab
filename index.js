function distanceFromHqInBlocks(someValue){

    const hq=42
    if(someValue <= hq){
        return hq - someValue;
    }else{
        return someValue - hq;
    }
}

distanceFromHqInFeet(43);


// Each block in Manhattan is 264 feet long 
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264

}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination){
    if (destination > start){
        return (destination - start) * 264
    }else if(start > destination){
        return (start - destination) * 264
    }

}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination)<400){
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination)<=2000){
        return (distanceTravelledInFeet(start, destination)-400)/50;
    }
    else if (distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far";
    }
    else {
        return 25;
    }
}