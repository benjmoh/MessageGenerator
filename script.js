const message1 = ["You are ", "Keep on ", "You should start "];
const message2 = ["working to ", "dreaming to ", "manifesting to "];
const message3 = ["be rich.", "be promoted.", "be happy."];
//Stored messages
function randInt(){
    return Math.floor(Math.random() * 3);
}
//Function to generate a random number between 0 and 2
function randMessage(){

    const finalMessage = [];

    a = randInt();

    switch(a){
        case 0:
            finalMessage.push(message1[0]);
            break;
        case 1:
            finalMessage.push(message1[1]);
            break;
        case 2:
            finalMessage.push(message1[2]);
            break;
    }

    b = randInt();

    switch(b){
        case 0:
            finalMessage.push(message2[0]);
            break;
        case 1:
            finalMessage.push(message2[1]);
            break;
        case 2:
            finalMessage.push(message2[2]);
            break;
    }

    c = randInt();

    switch(c){
        case 0:
            finalMessage.push(message3[0]);
            break;
        case 1:
            finalMessage.push(message3[1]);
            break;
        case 2:
            finalMessage.push(message3[2]);
            break;
    }

    return finalMessage.join("");
    
}
//Function to randomly select the different message components

console.log(randMessage());
//Output final message