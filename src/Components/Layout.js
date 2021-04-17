import React from 'react'

import client from '../lib/mqtt/mqtt-client';
import MessagesLineChart from './MessagesLineChart';
import PieChart from './PieChart';
import MessagesChart from './MessagesChart';
import ClientLineChart from './ClientLineChart';
import BytesLineChart from './BytesLinechart';
import PacketLineChart from './PacketLineChart';
import SubscriptionLineChart from './SubscriptionLineChart';



class Layout extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: {},
            intervalId: 0,
        };
    }

    componentDidMount = () => {
        client.on('connect', () => {
            client.subscribe('$SYS')
        })

        client.on('message', (topic, message) => {
            this.handleMesssage(message);
        });
    }

    handleMesssage = (message) => {
        console.log('message recieved', message)
        let data = JSON.parse(message.toString());

        this.setState({
            data: { ...data },
            date: new Date()
        })
        console.log('state', this.state)
    }

    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
        if (this.client) {
            this.client.end();
        }
    }

    render = () => {
        return (
            <div className="d-flex flex-column p-3 h-100">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="d-flex h-100 card">
                                    <div className="card-body pb-0">
                                        <div className="card-title">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                            <span className="font-weight-bold">Client Status</span>
                                        </div>
                                    </div>
                                    <div className="card-body d-flex justify-content-center align-content-center">
                                        <PieChart data={{
                                            data: this.state.data,
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <MessagesChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body pb-0">
                                <div className="card-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                    <span className="font-weight-bold">Client</span>
                                </div>
                            </div>
                            <div className="card-body pt-0 d-flex justify-content-center align-content-center">
                                <ClientLineChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body pb-0">
                                <div className="card-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                    <span className="font-weight-bold">Messages</span>
                                </div>
                            </div>
                            <div className="card-body pt-0 d-flex justify-content-center align-content-center">
                                <MessagesLineChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4 h-50">
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body pb-0">
                                <div className="card-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                    <span className="font-weight-bold">Client</span>
                                </div>
                            </div>
                            <div className="card-body pt-0 d-flex justify-content-center align-content-center">
                                <BytesLineChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body pb-0">
                                <div className="card-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                    <span className="font-weight-bold">Packets</span>
                                </div>
                            </div>
                            <div className="card-body pt-0 d-flex justify-content-center align-content-center">
                                <PacketLineChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body pb-0">
                                <div className="card-title">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                    </svg>
                                    <span className="font-weight-bold">Subscriptions</span>
                                </div>
                            </div>
                            <div className="card-body pt-0 d-flex justify-content-center align-content-center">
                                <SubscriptionLineChart data={{
                                    data: this.state.data,
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;