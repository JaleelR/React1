const App = () => {
    return (
        <div>
  <Person name="Jaleel" age={17} hobbies={["Hiking", "Biking", "Walking" ]} /> 
        <Person name="Mavis" age={91} hobbies={["Hiking", "Biking", "Walking" ]} /> 
        <Person name="Myesha" age={51} hobbies={["Hiking", "Biking", "Walking" ]} /> 

        </div>
      
    )
}

ReactDOM.render(<App />, document.getElementById("root"))