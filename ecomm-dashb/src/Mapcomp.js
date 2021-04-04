import React from 'react';
import reactDom from 'react-dom';
export default class Mapcomp extends React.Component {
    constructor() {
        super();
        this.state = {
            stackd: ["java", "c++", "php", "laravel"],
            stac: ["majid", "shah", "from", "islamabad"],
        };
    }
    render() {
        return (
            <div>
                {/* <h1>{this.state.stackd}</h1>
                <h2>{this.state.stac}</h2> */}
                <h1>{this.state.stackd.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
                </h1>
                <h2>
                    {this.state.stac.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </h2>
            </div>
        )
    }

}