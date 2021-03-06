import React from 'react';
import './CreateCampaign.css';
import logo from "../header/logo/fammy.png";

import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: 20,
        marginRight: 20,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    formControl: {
        marginLeft: 20,
        marginRight: 20,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const genres = [
    'Pop',
    'Rock',
    'Hard Rock',
    'Rhythm & Blues (R&B)',
    'Country',
    'Soul',
    'Country Pop',
    'Latin',
    'Disco',
    'Pop Rock',
    'Alternative Rock',
    'Dance',
    'Jazz',
    'New Wave',
    'Hip Hop',
    'Dance Pop',
];

class CreateCampaign extends React.Component {

    logInAction = (event) => {
        // event.preventDefault();
        // event.stopPropagation();
        // this.props.history.push(`/logIn`);
    };

    logoClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push('/');
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleGenreChange = event => {
        this.setState({ genre: event.target.value });
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "Name",
            genre: [],
            email: "Email address",
            password: "Password",
            amount: "0",
            checkedA: false,
            checkedB: false,
            checkedC: false
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        alert(this.state.email + " " + this.state.password + " ");
        event.preventDefault();
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="create-campaign-top-container">
                <div className="create-campaign">
                    <div id="mainLogo">
                        <img src={logo} alt="Fammy" onClick={this.logoClick}/>
                    </div>
                    <Typography component="h6" variant="h6">
                        Make it easy for people to learn about your project.
                    </Typography>
                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Artist name
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Artist name"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Song name
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Song name"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Song image URL
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Image URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Select genres
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <FormControl className={classes.formControl} fullWidth>
                                <InputLabel htmlFor="select-multiple-chip" >Genres</InputLabel>
                                <Select
                                    multiple
                                    fullWidth
                                    value={this.state.genre}
                                    onChange={this.handleGenreChange}
                                    input={<Input id="select-multiple-chip"/>}
                                    renderValue={selected => (
                                        <div className={classes.chips}>
                                            {selected.map(value => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                >
                                    {genres.map(name => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Attach full version of the song
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Attach full version of the song"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Attach short version of the song
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                30 seconds
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Attach short version of the song"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Spotify URL to the audio
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Spotify URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Add a link to your YouTube channel
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Video will be published on your channel
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="YouTube channel URL"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Add videos that describes your project
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project
                                You can add more than one video, just use ',' between links
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="YouTube URLs"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Campaign description
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are.
                                Your description should tell backers everything they need to know.
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Write about your project, like you're explaining it to a friend"
                                className={classes.textField}
                                multiline={true}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Campaign duration
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Set a time limit for your campaign. You won’t be able to change this after you launch
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <TextField
                                id="outlined-name"
                                label="Enter number of days"
                                className={classes.textField}
                                // onChange={this.handleChange('name')}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Funding goal
                            </Typography>
                            <Typography component="p" variant="subtitle1">
                                Set an achievable goal that covers what you need to complete your project.
                                Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <Input
                                id="adornment-amount"
                                fullWidth
                                className={classes.textField}
                                // onChange={this.handleChange('amount')}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </div>
                    </div>

                    <div className="create-campaign-horizontal-container-double-height">
                        <div className="create-campaign-horizontal-container-left">
                            <Typography component="p" variant="h6">
                                Finally, let’s confirm your eligibility.
                            </Typography>
                        </div>
                        <div className="create-campaign-horizontal-container-right">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkedA}
                                        onChange={this.handleChange('checkedA')}
                                        value="checkedA"
                                    />
                                }
                                label="I am at least 18 years old."
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkedB}
                                        onChange={this.handleChange('checkedB')}
                                        value="checkedA"
                                    />
                                }
                                label="I can verify a bank account and government-issued ID."
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.checkedC}
                                        onChange={this.handleChange('checkedC')}
                                        value="checkedA"
                                    />
                                }
                                label="I have a debit and/or credit card."
                            />
                        </div>
                    </div>


                    <div className="create-campaign-btn-container">
                        <Button color="primary" className={classes.button} onClick={this.logInAction}>
                            By creating Campaign you agree with Terms
                        </Button>
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Create Campaign
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(CreateCampaign);
