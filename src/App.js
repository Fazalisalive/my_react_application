import React from 'react'

import { Cards, Charts, CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaImages from './images/logo2.png'


class App extends React.Component{

    state = {
        data:{},
        country: '',
    }

    handleCountryChange = async (country) => {

        // fetch data
        const fetchedData = await fetchData(country)

        // set the state
        this.setState({data: fetchedData, country: country})

    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({ data: fetchedData})
    }
    render(){
        const { data, country } = this.state
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImages} alt="COID-19"/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Cards data={data}/>
                <Charts data={data} country={country}/>
                
                <h6>© 2020 TechSiege, 
                    D&D by: Fazal Ur Rehman Azad</h6>
            </div>
        )
    }

}

export default App 