

const Button = ({ label, onClick }) => { 
    return (
        <button onClick={onClick} className="custom-button">
        {label}
        </button>
    );
};
 
export default Button; 