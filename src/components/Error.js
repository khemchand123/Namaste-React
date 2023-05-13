import { useRouteError } from 'react-router-dom';

const Error = () => {
    const { status, statusText} = useRouteError();
    return (
        <div className="error">
            <h1>OOPS.....</h1>
            <h3>Unable to route to that URL....</h3>
            <h3>{status}  {statusText}</h3>
        </div>
    );
}

export default Error;