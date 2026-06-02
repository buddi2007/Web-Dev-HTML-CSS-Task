function toggleMode()
{
    document.body.classList.toggle("dark-mode");
}

async function getQuote()
{
    try
    {
        const response =
        await fetch(
        "https://dummyjson.com/quotes/random"
        );

        const data =
        await response.json();

        document.getElementById("quote").innerText =
        data.quote;
    }

    catch(error)
    {
        document.getElementById("quote").innerText =
        "Failed to load quote";
    }
}