import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Nav from './Nav';
import Table1 from './Table';

const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
});

export default class Main extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            // jackets: [],
            // shirts: [],
            // accessories: [],
            jackets: [{"id":"0e4772c827c4296592fb1","name":"WEERLEP METROPOLIS RAPTOR","color":["black"],"manufacturer":"reps","price":98,"availability":"INSTOCK"},{"id":"6d39a08b3bcae88a67","name":"DERWEER TYRANNUS BANG","color":["purple"],"manufacturer":"abiplos","price":15,"availability":"INSTOCK"},{"id":"76ec839da3ef71ce0f936","name":"WED STAR","color":["red"],"manufacturer":"nouke","price":12,"availability":"INSTOCK"},{"id":"8a683330a1d04fcb0e9a75","name":"JILTYRP ROOM","color":["blue"],"manufacturer":"abiplos","price":43,"availability":"OUTOFSTOCK"},{"id":"15d252f9cf170cd68f7cb","name":"ONILYR BANG","color":["green"],"manufacturer":"reps","price":59,"availability":"INSTOCK"},{"id":"d9fe8ba212795cba3914dd","name":"WEDHOP POWER","color":["grey"],"manufacturer":"derp","price":26,"availability":"INSTOCK"},{"id":"faa32d49205765b4608d93","name":"REP SWEET SLIP","color":["black"],"manufacturer":"abiplos","price":63,"availability":"INSTOCK"},{"id":"30d2d9f3851621d5a3cd9","name":"TYRPCII TYRANNUS","color":["grey"],"manufacturer":"xoon","price":59,"availability":"INSTOCK"},{"id":"ec78188c3b3441f8a61e5a","name":"GREPOX WIND SLIP","color":["red"],"manufacturer":"reps","price":99,"availability":"LESSTHAN10"},{"id":"a89993b007dc4d95dc089f60","name":"REPXIU RAPTOR","color":["purple"],"manufacturer":"abiplos","price":78,"availability":"INSTOCK"},{"id":"99964fb5a2a8d24b6fdf423d","name":"XIUEWH FANTASY","color":["blue"],"manufacturer":"nouke","price":15,"availability":"INSTOCK"},{"id":"00053492ae8ab653903","name":"WEDIU WIND","color":["red"],"manufacturer":"nouke","price":32,"availability":"INSTOCK"},{"id":"94fabf5bfaa20cf88750f4bd","name":"CIIXIU GREEN","color":["green"],"manufacturer":"nouke","price":21,"availability":"INSTOCK"},{"id":"50231d755679ea99afa34","name":"WED BRIGHT","color":["black"],"manufacturer":"nouke","price":62,"availability":"INSTOCK"},{"id":"fa5ee242bace7906ff6fee0","name":"ORBIU SPORT","color":["green","white"],"manufacturer":"reps","price":94,"availability":"INSTOCK"},{"id":"a3b4efe752d401193ad2","name":"XODER XTREME","color":["green"],"manufacturer":"nouke","price":94,"availability":"INSTOCK"},{"id":"e30bc9fb9a1ff53c9b476","name":"DERGREP BRIGHT","color":["red"],"manufacturer":"derp","price":90,"availability":"INSTOCK"},{"id":"368b8c44a7c9abf33e1e","name":"NYXXIU WIND","color":["green"],"manufacturer":"xoon","price":40,"availability":"INSTOCK"},{"id":"2f5d5d33851158bcf07cd6","name":"TYRPBE MAGIC","color":["green"],"manufacturer":"nouke","price":64,"availability":"INSTOCK"}],
            shirts: [{"id":"0e477c827c4296592fbd2","name":"WEERLEP METROPOLIS RAPTOR","color":["black"],"manufacturer":"reps","price":98,"availability":"INSTOCK"},{"id":"6d39a08b3bcae88a67","name":"DERWEER TYRANNUS BANG","color":["purple"],"manufacturer":"abiplos","price":15,"availability":"INSTOCK"},{"id":"76ec839da3ef71ce0f936","name":"WED STAR","color":["red"],"manufacturer":"nouke","price":12,"availability":"INSTOCK"},{"id":"8a683330a1d04fcb0e9a75","name":"JILTYRP ROOM","color":["blue"],"manufacturer":"abiplos","price":43,"availability":"OUTOFSTOCK"},{"id":"15d252f9cf170cd68f7cb","name":"ONILYR BANG","color":["green"],"manufacturer":"reps","price":59,"availability":"INSTOCK"},{"id":"d9fe8ba212795cba3914dd","name":"WEDHOP POWER","color":["grey"],"manufacturer":"derp","price":26,"availability":"INSTOCK"},{"id":"faa32d49205765b4608d93","name":"REP SWEET SLIP","color":["black"],"manufacturer":"abiplos","price":63,"availability":"INSTOCK"},{"id":"30d2d9f3851621d5a3cd9","name":"TYRPCII TYRANNUS","color":["grey"],"manufacturer":"xoon","price":59,"availability":"INSTOCK"},{"id":"ec78188c3b3441f8a61e5a","name":"GREPOX WIND SLIP","color":["red"],"manufacturer":"reps","price":99,"availability":"LESSTHAN10"},{"id":"a89993b007dc4d95dc089f60","name":"REPXIU RAPTOR","color":["purple"],"manufacturer":"abiplos","price":78,"availability":"INSTOCK"},{"id":"99964fb5a2a8d24b6fdf423d","name":"XIUEWH FANTASY","color":["blue"],"manufacturer":"nouke","price":15,"availability":"INSTOCK"},{"id":"00053492ae8ab653903","name":"WEDIU WIND","color":["red"],"manufacturer":"nouke","price":32,"availability":"INSTOCK"},{"id":"94fabf5bfaa20cf88750f4bd","name":"CIIXIU GREEN","color":["green"],"manufacturer":"nouke","price":21,"availability":"INSTOCK"},{"id":"50231d755679ea99afa34","name":"WED BRIGHT","color":["black"],"manufacturer":"nouke","price":62,"availability":"INSTOCK"},{"id":"fa5ee242bace7906ff6fee0","name":"ORBIU SPORT","color":["green","white"],"manufacturer":"reps","price":94,"availability":"INSTOCK"},{"id":"a3b4efe752d401193ad2","name":"XODER XTREME","color":["green"],"manufacturer":"nouke","price":94,"availability":"INSTOCK"},{"id":"e30bc9fb9a1ff53c9b476","name":"DERGREP BRIGHT","color":["red"],"manufacturer":"derp","price":90,"availability":"INSTOCK"},{"id":"368b8c44a7c9abf33e1e","name":"NYXXIU WIND","color":["green"],"manufacturer":"xoon","price":40,"availability":"INSTOCK"},{"id":"2f5d5d33851158bcf07cd6","name":"TYRPBE MAGIC","color":["green"],"manufacturer":"nouke","price":64,"availability":"INSTOCK"}],
            accessories: [{"id":"0e4772c27c4296592fbd3","name":"WEERLEP METROPOLIS RAPTOR","color":["black"],"manufacturer":"reps","price":98,"availability":"INSTOCK"},{"id":"6d39a08b3bcae88a67","name":"DERWEER TYRANNUS BANG","color":["purple"],"manufacturer":"abiplos","price":15,"availability":"INSTOCK"},{"id":"76ec839da3ef71ce0f936","name":"WED STAR","color":["red"],"manufacturer":"nouke","price":12,"availability":"INSTOCK"},{"id":"8a683330a1d04fcb0e9a75","name":"JILTYRP ROOM","color":["blue"],"manufacturer":"abiplos","price":43,"availability":"OUTOFSTOCK"},{"id":"15d252f9cf170cd68f7cb","name":"ONILYR BANG","color":["green"],"manufacturer":"reps","price":59,"availability":"INSTOCK"},{"id":"d9fe8ba212795cba3914dd","name":"WEDHOP POWER","color":["grey"],"manufacturer":"derp","price":26,"availability":"INSTOCK"},{"id":"faa32d49205765b4608d93","name":"REP SWEET SLIP","color":["black"],"manufacturer":"abiplos","price":63,"availability":"INSTOCK"},{"id":"30d2d9f3851621d5a3cd9","name":"TYRPCII TYRANNUS","color":["grey"],"manufacturer":"xoon","price":59,"availability":"INSTOCK"},{"id":"ec78188c3b3441f8a61e5a","name":"GREPOX WIND SLIP","color":["red"],"manufacturer":"reps","price":99,"availability":"LESSTHAN10"},{"id":"a89993b007dc4d95dc089f60","name":"REPXIU RAPTOR","color":["purple"],"manufacturer":"abiplos","price":78,"availability":"INSTOCK"},{"id":"99964fb5a2a8d24b6fdf423d","name":"XIUEWH FANTASY","color":["blue"],"manufacturer":"nouke","price":15,"availability":"INSTOCK"},{"id":"00053492ae8ab653903","name":"WEDIU WIND","color":["red"],"manufacturer":"nouke","price":32,"availability":"INSTOCK"},{"id":"94fabf5bfaa20cf88750f4bd","name":"CIIXIU GREEN","color":["green"],"manufacturer":"nouke","price":21,"availability":"INSTOCK"},{"id":"50231d755679ea99afa34","name":"WED BRIGHT","color":["black"],"manufacturer":"nouke","price":62,"availability":"INSTOCK"},{"id":"fa5ee242bace7906ff6fee0","name":"ORBIU SPORT","color":["green","white"],"manufacturer":"reps","price":94,"availability":"INSTOCK"},{"id":"a3b4efe752d401193ad2","name":"XODER XTREME","color":["green"],"manufacturer":"nouke","price":94,"availability":"INSTOCK"},{"id":"e30bc9fb9a1ff53c9b476","name":"DERGREP BRIGHT","color":["red"],"manufacturer":"derp","price":90,"availability":"INSTOCK"},{"id":"368b8c44a7c9abf33e1e","name":"NYXXIU WIND","color":["green"],"manufacturer":"xoon","price":40,"availability":"INSTOCK"},{"id":"2f5d5d33851158bcf07cd6","name":"TYRPBE MAGIC","color":["green"],"manufacturer":"nouke","price":64,"availability":"INSTOCK"}],

            loaded: false,

            categories: ["jackets", "shirts", "accessories"]
        }
        
        this.loadData = this.loadData.bind(this);
        this.reorderCategories = this.reorderCategories.bind(this);
    }

    async loadData() {
        this.setState({loaded: false}); // Unables refreshing of data

        for(var category of this.state.categories) {
            await this.getData(category);
        }

        this.setState({loaded: true});
    }

    getData = (category) => {
        // return fetch('http://localhost:8080/items?category=' + category)
        // .then(responce => responce.json())
        // .then(data => {
        //     this.setState({[category]: data})
        // })
        // .catch(e => console.log(e));
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
                    <div>
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
                            <Table1 data={this.state[val]} />
                        </Route>
                    )
                })}
                <Route>
                    <p>aaaaaaa</p>
                </Route>
            </Switch>
        )
    }
}
