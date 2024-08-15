import React, { useState } from "react";
import "./Price.css";

const Prices = () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  const data = [
    { Api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
    { Api: "OpenAI", model: "GPT-4", price: "$0.03" },
    { Api: "Together AI", model: "	Llama-2-70b", price: "$0.0008" },
    { Api: "Together AI", model: "	Llama-2-13b", price: "$0.0006" },
  ];
  return (
    <div className="Main-comp" id={theme}>
      <div className="heading">
        <h1>Book Generator API</h1>
      </div>
      <div className="price-nav">
        <a href="/">Overview</a>
        <a href="/">Authentication</a>
        <a href="/">Endpoints</a>
        <a href="/">Tutorial</a>
        <a href="/">Code Examples</a>
        <a href="/">Pricing</a>
        <button id="tooglebutton" onClick={changeTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" />
          </svg>
        </button>
      </div>

      <div className="overview">
        <h2>Overview</h2>
        <p>
          The Book Generator API allows you to generate books on various topics
          using different language models. This documentation provides details
          on how to use the API, including authentication, available endpoints,
          and code examples.
        </p>
      </div>

      <div className="price-section">
        <h2>API Pricing</h2>
        <p>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <table>
          <tr>
            <th>Api</th>
            <th>Model</th>
            <th>Price per 1K tokens</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.Api}</td>
                <td>{val.model}</td>
                <td>{val.price}</td>
              </tr>
            );
          })}
        </table>

        <h3>Token Estimation</h3>
        <p>
          On average, 1 token is approximately 4 characters or 0.75 words. For
          precise pricing, we recommend using our token calculator tool.
        </p>

        <h3>Billing</h3>
        <p>
          You will only be charged for the tokens used in generating the book.
          The API tracks token usage and bills accordingly. Detailed usage
          reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
};

export default Prices;
