import error from '../components/images/404.jpg'


export const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <img
                src={error} alt="error/"></img>
        </div>
    );
}

export default NotFound;