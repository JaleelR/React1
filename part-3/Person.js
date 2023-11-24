const Person = (props) => { 
    let reply;
    props.age > 18 ? reply = "Please go vote" : reply = "You must be 18";
    props.name.length > 8 ? props.name.length = 6 : props.name.length 
    
    return (
        <p> Learn Some Information about this person
        <h3>  {reply}  </h3>
            {props.name} {props.age}
            <h4>Hobbies:</h4>
            <ul>{props.hobbies.map(h => <li>{h}</li>)} </ul>
        </p> 
    )
}