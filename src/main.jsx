import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' // Step one--delete this
import App from './App.jsx'

import './commonResource/css/bootstrap.css' //Importing without "from...". These two could've also been called on App.jsx
import './commonResource/css/styles.css' // ??? How imported without having being exported?????
// import './commonResource/js/bootstrap.js' // ??? Though we might not need it here, Why this line won't work though???? 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
