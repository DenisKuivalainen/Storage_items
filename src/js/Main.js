import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Nav from './Nav';
import TableElement from './Table';
import Menu from './Menu';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

export default class Main extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            jackets: [],
            shirts: [],
            accessories: [],
            
            loaded: false,

            categories: ["jackets", "shirts", "accessories"]
        }
        
        this.loadData = this.loadData.bind(this);
        this.reorderCategories = this.reorderCategories.bind(this);
    }

    async loadData() {
        // Unables refreshing of data and clear all current data
        this.setState({
            loaded: false,
            jackets: [],
            shirts: [],
            accessories: []
        }); 

        var categories = this.state.categories;
        for(var category of categories) {
            await this.getData(category);
        }

        this.setState({loaded: true});
    }

    getData = (category) => {
        return fetch('/items?category=' + category)
        .then(responce => responce.json())
        .then(data => {
            this.setState({[category]: data})
        })
        .catch(e => console.log(e));
    }

    // Concider if user will decide to reload data, this will make first to load category he is in now
    reorderCategories = (category) => {
        let arr = this.state.categories;
        let position = arr.indexOf(category);

        if(position < 0) return;

        arr.splice(position, 1);
        arr.splice(0, 0, category);

        this.setState({categories: arr});
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="wrapper">
                        <Nav 
                            loadData={this.loadData}
                            reorderCategories={this.reorderCategories} 
                            values={["jackets", "shirts", "accessories"]}
                            loaded={this.state.loaded}
                        />

                        {this.renderSwitch()}
                    </div>
                </Router>
            </ThemeProvider>
        )
    }

    renderSwitch() {
        return(
            <Switch>
                {this.state.categories.map((val, k) => {
                    return(
                        <Route path={"/" + val} key={k}>
                            <TableElement data={this.state[val]} />
                        </Route>
                    )
                })}
                <Route>
                    <Menu />
                </Route>
            </Switch>
        )
    }
}
