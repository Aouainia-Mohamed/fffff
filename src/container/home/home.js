import React from 'react'
import { Input } from 'antd';

const { TextArea } = Input;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input:"hello"  };}


        changeValue = ({ target: { value } }) => {
            this.setState({ input:value });
          };
    handleClick=()=>{
        alert("button clicked")
    }
    render() {
        return (
            <div>
              <TextArea
              className="inputSql"
          value={this.state.input}
          onChange={this.changeValue}
          placeholder="Controlled autosize"
          autoSize={{ minRows: 4, maxRows: 5 }}
        />
           <button onClick={this.handleClick}>Start</button>
           </div>
        );
    
}}

export default Home;

