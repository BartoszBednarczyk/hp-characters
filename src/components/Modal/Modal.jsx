import React from 'react'

import styles from './Modal.module.css'

import { Fade } from '@material-ui/core'

import MinistryLogo from '../../images/Ministry_Logo_BLACK.svg'
import deathEaterLogo from '../../images/deathEater.svg'
import orderOfThePhoenixLogo from '../../images/orderOfThePhoenix.svg'
import dumbledoresArmyLogo from '../../images/dumbledoresArmy.svg'

import cx from 'classnames'

function Modal({onClose ,show, props: {props}}){


    

    if (!show) {
        return null;
      } else{
        const house = props.house
        var houseClass = {}
        house==="Gryffindor" ? houseClass = {house:styles.Gryffindor} : 
        house==="Ravenclaw" ? houseClass = {house:styles.Ravenclaw} : 
        house==="Hufflepuff" ? houseClass = {house:styles.Hufflepuff} : 
        house==="Slytherin" ? houseClass = {house: styles.Slytherin} : houseClass = {house: styles.House}
      }
    return(
        
        <div className={styles.container}>
            <Fade in={show} style={{ transformOrigin: '0 0 0' }}
          {...(show ? { timeout: 500 } : {})}>
            <div className={styles.card}>
            <button onClick={() => onClose()} className={styles.closeButton}>X</button>
            <h1>{props.name}</h1>
            <div className={cx(styles.houseLine, houseClass.house)}></div>
            <br />
            
            
            <h2 className={props.role ? "" : styles.hidden}>{props.role}</h2>
            <p className={props.role ? "" : styles.hidden}>Role</p>
            <div className={props.role ? styles.divider : styles.hidden}></div>
            

            <h2 className={props.house ? "" : styles.hidden}>{props.house}</h2>
            <p className={props.house ? "" : styles.hidden}>House</p>
            <div className={props.house ? styles.divider : styles.hidden}></div>

            <h2 className={props.school ? "" : styles.hidden}>{props.school}</h2>
            <p className={props.school ? "" : styles.hidden}>School</p>
            <div className={props.school ? styles.divider : styles.hidden}></div>

            <h2 className={props.bloodStatus==="unknown" ? styles.hidden : ""}>{props.bloodStatus}</h2>
            <p className={props.bloodStatus==="unknown" ? styles.hidden : ""}>Blood status</p>
            <div className={props.bloodStatus==="unknown" ? styles.hidden : styles.divider}></div>

            <h2 className={props.species ? "" : styles.hidden}>{props.species}</h2>
            <p className={props.species ? "" : styles.hidden}>Species</p>
            <div className={props.species ? styles.divider : styles.hidden}></div>

            <h2 className={props.wand ? "" : styles.hidden}>{props.wand}</h2>
            <p className={props.wand ? "" : styles.hidden}>Wand</p>
            <div className={props.wand ? styles.divider : styles.hidden}></div>

            <h2 className={props.boggart ? "" : styles.hidden}>{props.boggart}</h2>
            <p className={props.boggart ? "" : styles.hidden}>Boggart</p>
            <div className={props.boggart ? styles.divider : styles.hidden}></div>

            <h2 className={props.animagus ? "" : styles.hidden}>{props.animagus}</h2>
            <p className={props.animagus ? "" : styles.hidden}>Animagus</p>
            <div className={props.animagus ? styles.divider : styles.hidden}></div>

            <h2 className={props.patronus ? "" : styles.hidden}>{props.patronus}</h2>
            <p className={props.patronus ? "" : styles.hidden}>Patronus</p>
            <div className={props.patronus ? styles.divider : styles.hidden}></div>


            <img src={MinistryLogo} className={props.ministryOfMagic ? styles.icon : styles.hidden} alt="Ministry of magic"/>
            <p className={props.ministryOfMagic ? "" :styles.hidden}>Ministry of Magic</p>
            <div className={props.ministryOfMagic ? styles.divider : styles.hidden}></div>

            <img src={deathEaterLogo} className={props.deathEater ? styles.icon : styles.hidden} alt="Death Eater"/>
            <p className={props.deathEater ? "" :styles.hidden}>Death Eater</p>
            <div className={props.deathEater ? styles.divider : styles.hidden}></div>

            <img src={orderOfThePhoenixLogo} className={props.orderOfThePhoenix ? styles.icon : styles.hidden} alt="Order of the Phoenix"/>
            <p className={props.orderOfThePhoenix ? "" :styles.hidden}>Order of the Phoenix</p>
            <div className={props.orderOfThePhoenix ? styles.divider : styles.hidden}></div>

            <img src={dumbledoresArmyLogo} className={props.dumbledoresArmy ? styles.icon : styles.hidden} alt="Dumbledores Army"/>
            <p className={props.dumbledoresArmy ? "" :styles.hidden}>Dumbledores Army</p>
            <div className={props.dumbledoresArmy ? styles.divider : styles.hidden}></div>

            </div>
            
            </Fade>
        </div>
        
    )
}

export default Modal