import React, { useState, useEffect } from 'react'

import { Card, Typography, Grid } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import cx from 'classnames'


import styles from './Cards.module.css'

function Cards(props, key){ 

    const house = props.props.house
    var houseClass = {}
    house==="Gryffindor" ? houseClass = {house:styles.Gryffindor} : 
    house==="Ravenclaw" ? houseClass = {house:styles.Ravenclaw} : 
    house==="Hufflepuff" ? houseClass = {house:styles.Hufflepuff} : 
    house==="Slytherin" ? houseClass = {house: styles.Slytherin} : houseClass = {house: styles.House}
    return(
        
            <Grid item component={Card} className={cx(houseClass.house, styles.card)} >
                <CardContent>
                    <Typography variant="h5">
                        {props.props.name}
                    </Typography>
                </CardContent>
            </Grid>
        
        
    )
}

export default Cards