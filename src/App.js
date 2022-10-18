import React from "react";
import "./App.css";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fullName: "GUENICH AYOUB",
      bio: "Mecatronique engineer and Full Stack Developer",
      image: "https://www.maxpixel.net/static/photo/1x/Icon-Avatar-Person-Business-Male-Profile-User-5359553.png",
      profession: "Engineer",
      isShow: true,
      counter: 0,
    };
  }

  handleClick = () =>{  this.setState({ isShow: !this.state.isShow, })};

 componentDidMount() {
     setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    },1000);
  }

  render() {
    console.log('render')
    const cardStyle={
      width:'200px',
      height:'200px',
      border:'5px solid lightgrey',
      borderRadus: '1px',
      pading:'4px',
      margin:'4px',
      boxShadow:"0 5px 8px #000"
  };

    return (
      <div>
        <div style={{width:'500px',height:'500px', border:'2px solid lightgrey',borderRadius: '20px', margin:'15px'}}> 
         {this.state.isShow && (
          <div className="box">   
              <img style={cardStyle} src={this.state.image} alt='404'/>
             
                <h1 style={{   color:"teal", fontWeight:"bold" }}>{this.state.fullName}</h1>

                <h2>{this.state.profession}</h2>

                <p><b><em>{this.state.bio}</em></b></p>
          
             </div>
         ) }
      </div>
      <div className="count">
      Count: {this.state.counter} {" "} sec
    </div>
      <button  style={{boxShadow:"0 5px 8px #000",margin: '50px'}}  type="button" className="btn" onClick={this.handleClick} >show profile</button>
    </div>
    );
  }
}

export default App;
