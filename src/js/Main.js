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
            
            loaded: 0,

            categories: ["jackets", "shirts", "accessories"]
        }
        
        this.loadData = this.loadData.bind(this);
    }

    async loadData() {
        // Unables refreshing of data and clear all current data
        await this.setState({
            loaded: 0,
            jackets: [],
            shirts: [],
            accessories: [],
        }); 

        for(var category of this.state.categories) {
            this.getData(category);
        }
    }

    async getData(category) {
        var notFetched = true;

        // Loop used to 100% data recieve, even if errors
        while(notFetched) {
            await fetch('/items?category=' + category)
            .then(responce => {
                if(responce.ok) return responce.json();
                throw new Error(responce.status);
            })
            .then(data => {
                this.setState({
                    [category]: data,
                    loaded: this.state.loaded + 1
                })
                notFetched = false;
            })
            .catch(e => console.log(e));
        }
    }

    render() {
        return(
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="wrapper">
                        <Nav 
                            loadData={this.loadData}
                            values={["jackets", "shirts", "accessories"]}
                            loaded={this.state.loaded >= 3}
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

    componentDidMount() {
        this.loadData();
    }
}
