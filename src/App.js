import React from 'react';

import { Cards } from './components/index'
import Grow from '@material-ui/core/Grow';

import { CircularProgress, Grid } from '@material-ui/core'
import styles from './App.module.css'
import logo from './images/logo.png'

import { fetchData } from "./api/index"


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      inputValue: "",
    }

    this.mapData = this.mapData.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
    await this.setState({data: fetchedData})
    await console.log(this.state.data)
    await this.mapData()
    //this.setState({cardComponents: this.mapData()})
  }

  async mapData(){
    await console.log(this.state.data[1].name)
    await this.setState({filteredData: this.state.data})
    await this.setState({cardComponents: this.state.filteredData.map((item, i)=><Cards key={item._id} props={item} />)}) 
  }
  
  handleInput(event){
    this.setState({inputValue: event.target.value},
      () => this.setState(
        {
          cardComponents:
          this.state.data
          .filter(item => item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
          .map((item, i)=><Cards key={i} props={item} />)
        }))
    console.log(this.state.inputValue)
    console.log("Refresh ")
     
  }

  handleClick(){
    console.log("Clicked")
  }


          
  render(){
    return(
      this.state.data?
      <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Header"/>
      {/* Header */}
      <input type="text" className={styles.inputClass} placeholder="Albus Dumbledore" name="names" value={this.state.inputValue} onChange={this.handleInput}/>
      {/* Library */}
        <Grid container justify="center">
          
          {this.state.cardComponents }
          
        </Grid>
      </div>
      :<div className={styles.loading}>
      <CircularProgress  />
      </div>
      
    )
  }
}

export default App;
