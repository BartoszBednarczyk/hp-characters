import React from 'react';

import { Cards, Modal } from './components/index'
//import Grow from '@material-ui/core/Grow';

import { CircularProgress, Grid, Checkbox } from '@material-ui/core'
import styles from './App.module.css'
import logo from './images/logo.png'

import { fetchData } from "./api/index"


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      inputValue: "",
      isDeatheater: false,
      isDumbledoresarmy: false,
      isOrderofthephoenix: false,
      isMinistryofmagic: false,
      isCardLoaded: false,
      props: {
        name: "Harry Potter"
      }
    }

    this.mapData = this.mapData.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterData = this.filterData.bind(this)
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
    await this.setState({cardComponents: this.state.filteredData.map((item, i)=><Cards key={item._id} props={item} handle={this.handleClick}  />)}) 
  }
  
  handleInput(event){
    this.setState({inputValue: event.target.value},
      () => this.filterData())
     
  }

  filterData(){
    this.setState(
      {
        cardComponents:
        this.state.data
        .filter(item => this.state.isDeatheater?item.deathEater:item)
        .filter(item => this.state.isDumbledoresarmy?item.dumbledoresArmy:item)
        .filter(item => this.state.isOrderofthephoenix?item.orderOfThePhoenix:item)
        .filter(item => this.state.isMinistryofmagic?item.ministryOfMagic:item)
        .filter(item => item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()))
        .map((item, i)=><Cards key={i} props={item} handle={() => this.handleClick()} />)
      })
  console.log(this.state.inputValue)
  console.log("Refresh ")
  }

  handleClick(){
    console.log("Clicked")
  }

  handleChange(event){
    const {name, checked} = event.target
    
    this.setState({[name]: checked}, ()=>this.filterData())
  }


          
  render(){
    return(
      this.state.data?
      <div className={styles.container}>
      <Modal show={this.state.isCardLoaded} props={this.state.props}/>
      <img className={styles.logo} src={logo} alt="Header"/>
      {/* Header */}
      <input type="text" className={styles.inputClass} placeholder="e.g. Albus Dumbledore" name="names" value={this.state.inputValue} onChange={this.handleInput}/>
      <div className={styles.checkboxes}>
      <div className={styles.checkboxLabel}>
      <Checkbox color='default' name='isDeatheater' checked={this.state.isDeatheater} onChange={this.handleChange}/><label>Death Eater</label>
      </div>
      <div className={styles.checkboxLabel}>
      <Checkbox className={styles.singleCheckbox} color='default' name='isDumbledoresarmy' checked={this.state.isDumbledoresarmy} onChange={this.handleChange}/><label>Dumbledores Army</label>
      </div>
      <div className={styles.checkboxLabel}>
      <Checkbox color='default' name='isOrderofthephoenix' checked={this.state.isOrderofthephoenix} onChange={this.handleChange}/><label>Order of the Phoenix</label>
      </div>
      <div className={styles.checkboxLabel}>
      <Checkbox color='default' name='isMinistryofmagic' checked={this.state.isMinistryofmagic} onChange={this.handleChange}/><label>Ministry of Magic</label>
      </div>
      </div>
      
      {/* Library */}
        <Grid container justify="center">
          {this.state.cardComponents }
          
        </Grid>
        <footer>
          <hr/>
          2020 - Bartosz Bednarczyk | <a href="https://github.com/BartoszBednarczyk">GitHub</a> | <a href="https://www.potterapi.com/">potterapi.com</a>
        </footer>
      </div>
      

      :<div className={styles.loading}>
      <CircularProgress  />
      </div>
      
    )
  }
}

export default App;
