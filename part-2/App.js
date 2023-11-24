const App = () => {
    return (
        <div>
            <Tweet username="JA" name="J" date={new Date().toDateString()} message="Hello" />
            <Tweet username="Yo" name="y" date={new Date().toDateString()} message="Hey" />
            <Tweet username="ME" name="M" date={new Date().toDateString()} message="bye" />   
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))