const QuoteButton = ({ fetchQuote }) => {
    return (
        // Button to fetch a new quote when clicked
        <button
            onClick={fetchQuote} // Calls the fetchQuote function passed as a prop
            style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            background: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            }}
        >
            New Quote
        </button>
    );
};

export default QuoteButton;
