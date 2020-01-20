import React, {Component,Fragment} from 'react';
class App extends Component{
    render(){
        const name="Sunil";
        const list=["Shivalkar","Dist-Burhanpur","New"];
        return (
            <div>
            <h1>Hi {name}</h1>
            {list.map(lists=>{
                return (<div>{lists}</div>);
            })}
            </div>
        );
    }
}
export default App;