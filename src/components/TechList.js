/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        // eslint-disable-next-line react/no-unused-state
        techs: ['teste', 'testre2'],
        newTech: '',
    };

    inserir = e => {
        this.setState({ newTech: e.target.value });
    };

    handleDelete = tech => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: '',
        });
    };

    componentDidMount() {

    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <h1>{this.state.newTech}</h1>
                    <input
                        type="text"
                        value={this.state.newTech}
                        onChange={this.inserir}
                    />
                    <ul>
                        {this.state.techs.map(tech => (
                            <TechItem
                                key={tech}
                                tech={tech}
                                onDelete={() => this.handleDelete(tech)}
                            />
                        ))}
                    </ul>
                    <button type="submit">Enviar</button>
                </form>
            </>
        );
    }
}
export default TechList;
