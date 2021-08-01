import React, { Component } from 'react'
import axios from 'axios';
import { withStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    chip_margin: {
        marginTop: theme.spacing(2)
    },
    chip: {
        width: '40vw'
    }
});

class SlotTime extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/').then(res => {
            this.setState({ time: res.data })
        }).catch(err => {
            console.error('error', err)
        })
        console.log('data', this.state.time)
    }

    handleClick(id) {
        this.props.history.push(`/${id}`);
    }

    render() {
        const { classes } = this.props
        return (
            <>
            <Typography color="primary">Book Your Slot</Typography>
                {this.state.time.map((ele, id) => {
                    const data = localStorage.getItem(`saved_data${id}`) !== null ? localStorage.getItem(`saved_data${id}`) : ''
                    return (
                        <div className={classes.chip_margin}>{
                            data === '' ?
                                <Chip className={`${classes.chip}`} key={id} label={ele} clickable onClick={this.handleClick.bind(this, id)} /> :
                                <Chip className={`${classes.chip}`} style={{ backgroundColor: 'red' }} key={id} label={ele} clickable onClick={this.handleClick.bind(this, id)} />
                        }</div>
                    )
                })}
            </>

        )
    }

}

export default withStyles(styles)(SlotTime)