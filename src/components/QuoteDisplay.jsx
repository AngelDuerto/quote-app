import { useState, useEffect } from "react";
import QuoteButton from "./QuoteButton";

const QuoteDisplay = () => {
      // State variables to store the quote, author, and potential error message
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [error, setError] = useState(null);

     // Function to fetch a random quote from the API
    const fetchQuote = async () => {
        try {
        setError(null); // Reset error before fetching new quote

        // Fetch request to the quotes API with an authentication key
        const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { "X-Api-Key": "Z3+NemftBv6/dEpXYGGrsw==YbfvfLMQsEqnTNnK" },
        });

         // Check if the response is successful
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.json(); // Parse the JSON response
        // Set the quote and author, or default values if not found
        setQuote(data[0]?.quote || "No quote found");
        setAuthor(data[0]?.author || "Unknown");
        } catch (err) {
        setError(err.message); // Set the error message if fetch fails
        }
    };

    // useEffect to fetch a quote when the component first renders
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        // Container for displaying the quote with basic styling
        <div style={{ textAlign: "center", padding: "20px", maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
        <h2>Random Quote</h2>
         {/* Display error message if there's an error, otherwise show the quote */}
        {error ? (
            <p style={{ color: "red" }}>{error}</p>
        ) : (
            <blockquote style={{ fontStyle: "italic", fontSize: "1.2em", marginBottom: "10px" }}>
            {quote}
            </blockquote>
        )}
        {/* Display the author if available */}
        {author && <p style={{ fontWeight: "bold", marginBottom: "20px" }}>- {author}</p>}
        {/* Button to fetch a new quote */}
        <QuoteButton fetchQuote={fetchQuote} />
        </div>
    );
};

export default QuoteDisplay;

