import {
    useEffect
} from 'react';
import {
    Button,
    IconButton,
    Grid
} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import { 
    useLocation,
    useHistory
} from 'react-router-dom';

export default function Nav(props) {
    const location = useLocation();

    useEffect(() => {
        props.reorderCategories(location.pathname.substr(1)); // To load first the current page data
        props.loadData(); // I found this as the best way of data loading after category order was changed
    }, [])

    return(
        <Grid container spacing={1} style={{ width: "100%" }}>
            {[...Array(3).keys()].map((k) => 
                <NavButtons 
                    key={k} 
                    k={k} 
                    props={props} 
                    location={location}
                />
            )}
            <Grid item xs={5} />
            <Grid item xs={1} style={{float: "right"}}> 
                <IconButton 
                    disabled={!props.loaded}
                    onClick={() => props.loadData()}
                >
                    <ReplayIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}

const NavButtons = (props) => {
    const history = useHistory();

    var value = props.props.values[props.k];
    var link = "/" + value;

    var handleClick = () => {
        history.push(link);
        props.props.reorderCategories(value);
    }

    return(
        <Grid item xs={2}>
            <Button 
                variant={props.location.pathname === link ? "contained" : "outlined"}
                style={{ width: "100%" }}
                onClick={() => handleClick()}
            >
                {value}
            </Button>
        </Grid>
    )
}