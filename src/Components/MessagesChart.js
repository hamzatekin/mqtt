

const MessagesChart = (props) => {
    return (
        <div className="d-flex flex-column">
            <div className="col-lg-12 card">
                <div className="card-body pl-0 pb-0">
                    <div className="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                        <span className="font-weight-bold">Retained Messages</span>
                    </div>

                </div>
                <p className="card-body d-flex justify-content-center align-content-center">
                    <span className="h4">{props?.data?.data.retainedMessages || 0}</span>
                </p>
            </div>
            <div className="col-lg-12 card mt-2">
                <div className="card-body pl-0 pb-0">
                    <div className="card-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                        <span className="font-weight-bold">Pending Messages</span>
                    </div>
                </div>
                <p className="card-body d-flex justify-content-center align-content-center">
                    <span className="h4">{props?.data?.data.pendingMessages || 0}</span>
                </p>
            </div>
        </div>
    )
}

export default MessagesChart