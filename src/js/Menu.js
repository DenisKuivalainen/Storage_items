import {
    Grid, 
    Typography
} from '@material-ui/core';
import '../css/menu.css';

export default function Menu() {
    return (
        <div className="menu">
            <Typography variant="subtitle1" className="text">
                This website displays information about items in stock. The data is displayed in three categories: jackets, shirts, and accessories. Use the navigation bar above to browse through each category. To update data, click the icon to the right of the navigation bar.
            </Typography>
            <Typography variant="h6" className="text">
                To get started, select one of the three categories suggested above.
            </Typography>
        </div>
    )
}