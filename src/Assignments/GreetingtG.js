import React from "react";

const Greeting = ({ name }) => {
    const currentHour = new Date().getHours();
    let greetingtext ='';

    if (currentHour <12) {
        greetingtext = "Good Morning";
    } else if (currentHour >= 12 && currentHour <= 18) {
        greetingtext = "Good Afternoon";
    } else {
        greetingtext = "Good Evening";
    }
    return (
        <div style ={StyleSheet.container}>
            <h1>{greetingtext} !</h1>
            <p>The Current Hour Is:{currentHour}</p>
        </div>
    );
};
const styles = {
    container: {
        textAlign: "center",
        marginTop: "50",
        fontFamily: "Arial",
        color: "#333",
    },
};
export default Greeting;
            
            