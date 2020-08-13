import React, { useState } from 'react'

import { Card, Typography, Grid } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import cx from 'classnames'

import { Modal } from '../index'


import styles from './Cards.module.css'

function Cards(props, key){ 

    const [show, changeShow] = useState(false)


    const house = props.props.house
    var houseClass = {}
    house==="Gryffindor" ? houseClass = {house:styles.Gryffindor} : 
    house==="Ravenclaw" ? houseClass = {house:styles.Ravenclaw} : 
    house==="Hufflepuff" ? houseClass = {house:styles.Hufflepuff} : 
    house==="Slytherin" ? houseClass = {house: styles.Slytherin} : houseClass = {house: styles.House}
    return(
            <Grid item component={Card} className={cx(houseClass.house, styles.card)} >
                
                    <Modal show={show} props={props} onClose={() => changeShow(!show)} />
               
                <div onClick={()=>changeShow(!show)}>
                <CardContent>
                    <Typography variant="h5">
                        {props.props.name}
                    </Typography>
                </CardContent>
                </div>
            </Grid>
    )
}

export default Cards