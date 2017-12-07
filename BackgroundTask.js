module.exports = async (IntentData) => {
    // intentData obtained is javascript object and reading object throws error like null object 
    try{
        IntentDataArray = Object.keys(IntentData).map(function(key){ return IntentData[key] })
        console.log(IntentDataArray[0]);
    }catch(err){
        console.log(err)
    }

    try {  
        const responseData = await fetch("https://facebook.github.io/react-native/movies.json");
        const responseJson = await responseData.json();
        return responseJson;
    } catch (error) {  
        throw new Error (error);
    }
}