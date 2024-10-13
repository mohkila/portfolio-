// "use client";
// import { useEffect } from "react";

// const TranslatePage = () => {
//   useEffect(() => {
//     // Initialize the Google Translate element
//     window.googleTranslateElementInit = function () {
//       new window.google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     };

//     // Load the Google Translate script
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.body.appendChild(script);

//     // Clean up the script on component unmount
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>My Web Page</h1>
//       <p>Hello everybody!</p>
//       <p>Translate this page:</p>
//       <div id="google_translate_element"></div>
//     </div>
//   );
// };

// export default TranslatePage;
