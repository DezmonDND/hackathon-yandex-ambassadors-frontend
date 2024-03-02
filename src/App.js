/* eslint-disable */
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { USERS } from "./mocks/users-data";
import Login from "./pages/Login/Login";
import Promocodes from "./pages/Promocodes";
import Ambassadors from "./pages/Ambassadors";
import Content from "./pages/Content";
import SendMerch from "./pages/SendMerch";
import Budget from "./pages/Budget";
import BudgetPrice from "./pages/BudgetPrice";
import Loyalti from "./pages/Loyalti";
import FAQ from "./pages/FAQ";


const theme = createTheme({
  typography: {
    fontFamily: ["YS Text", "Arial", "sans-serif"].join(","),
  },
});
function App() {
  const [rowData, setRowData] = useState(USERS);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/promocodes" replace />} />
          <Route path="/signin" element={<Login />} />
          <Route
            path="/promocodes"
            element={<Promocodes rowData={rowData} />}
          />
          <Route
            path="/ambassadors"
            element={<Ambassadors rowData={rowData} />}
          />
          <Route path="/content" element={<Content rowData={rowData} />} />
          <Route path="/send-merch" element={<SendMerch rowData={rowData} />} />
          <Route path="/budget" element={<Budget rowData={rowData} />} />
          {/* <Route path="/budget/info" element={<Budget rowData={rowData} />} /> */}
          <Route
            path="/budget-price"
            element={<BudgetPrice rowData={rowData} />}
          />
          <Route
            path="/loyalty-programm"
            element={<Loyalti rowData={rowData} />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          {/* TODO: добавить страницу 404 */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;