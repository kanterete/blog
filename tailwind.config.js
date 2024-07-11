/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "yel": "hsl(47, 88%, 63%)"
            },
            textColor: {
                "gr": "hsl(0, 0%, 50%)",
                "yel": "hsl(47, 88%, 63%)",
            },
            borderRadius: {
                'xxl': '18px',
            },
            fontSize: {
                "mid": "14px",
            },
            height: {
                "112": "28rem",
                "88": "22rem",
            },
            width: {
                "112": "28rem",
                "88": "21rem",
            },
            fontFamily: {
                "figEb": "FigtreeEb, sans-serif",
                "figSb": "FigtreeSb, sans-serif",
            },
            boxShadow: {
                "my": "6px 6px black",
                "my2": "12px 12px black",
            }
        },
    },
    plugins: [],
}

