import {Component} from 'react'

export default class Teste extends Component{

    state = {
        name: '',
        age: 19,
    }

    componentDidMount(){
        this.setState({
            name: 'Vinicius'
        })
    }

    componentDidUpdate(prevState, prevProps) {
        

    }


    render(){
        const {name} = this.state
        return <div />
    }
}