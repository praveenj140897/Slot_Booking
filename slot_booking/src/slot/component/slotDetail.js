import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';


const styles = theme => ({
    submit: {
        margin: theme.spacing(3, 2, 2)
    },
});

class SlotDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this)
        this.cancel = this.cancel.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    handleNumberChange(event) {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            this.setState({ phone: event.target.value })
        }

    }

    cancel() {
        this.props.history.push('/')
    }

    saveData() {
        const data = { id: this.props.match.params.id, first: this.state.firstName, last: this.state.lastName, phone: this.state.phone }
        const id = this.props.match.params.id
        localStorage.setItem(`saved_data${id}`, JSON.stringify(data))
        this.props.history.push('/')
    }

    render() {
        const { classes } = this.props;
        const id = this.props.match.params.id;
        const data = localStorage.getItem(`saved_data${id}`)
        const parseData = JSON.parse(data)
        if (parseData.first && parseData.last && parseData.phone && this.state.firstName === '' && this.state.lastName === '' && this.state.phone === '') {
            this.setState({
                firstName: parseData.first,
                lastName: parseData.last,
                phone: parseData.phone
            })
        }
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Typography color="primary">User's Details</Typography>
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First"
                    name="firstName"
                    autoComplete="name"
                    value={data === null ? this.state.firstName : parseData.id === this.props.match.params.id ? this.state.firstName : this.state.firstName} onChange={this.handleChange}
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last"
                    name="lastName"
                    autoComplete="name"
                    value={data === null ? this.state.lastName : parseData.id === this.props.match.params.id ? this.state.lastName : this.state.lastName} onChange={this.handleChange}
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone(must be 10 digit)"
                    name="phone"
                    autoComplete="name"
                    value={data === null ? this.state.phone : parseData.id === this.props.match.params.id ? this.state.phone : this.state.phone} onChange={this.handleNumberChange}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                        color: "#FFFFFF"
                    }}
                    className={classes.submit}
                    onClick={this.cancel}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={this.state.firstName === '' || this.state.lastName === '' || this.state.phone.length < 10 || this.state.phone.length > 10}
                    style={{
                        color: "#FFFFFF"
                    }}
                    className={classes.submit}
                    onClick={this.saveData}
                >
                    Save
                </Button>
            </Container>
        )
    }

}

export default withStyles(styles)(SlotDetail)