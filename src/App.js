/* eslint-disable */
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { USERS, HISTORY } from "./mocks/users-data";
import Login from "./pages/Login/Login";
import Promocodes from "./pages/Promocodes";
import Ambassadors from "./pages/Ambassadors";
import Content from "./pages/Content";
import SendMerch from "./pages/SendMerch";
import Budget from "./pages/Budget";
import BudgetPrice from "./pages/BudgetPrice";
import Loyalti from "./pages/Loyalti";
import FAQ from "./pages/FAQ/FAQ";
import AddFAQ from "./pages/FAQ/AddFAQ";
import EditFAQ from "./pages/FAQ/EditFAQ";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import  NotFound from "./pages/NotFound/NotFound"
import History from "./pages/History/History"
import Notices from "./pages/Notices/Notices"

const theme = createTheme({
  typography: {
    fontFamily: ["YS Text", "Arial", "sans-serif"].join(","),
  },
});
function App() {
  const [rowData, setRowData] = useState(USERS);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  function handleEscapeClick(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClick);
    return () => {
      document.removeEventListener('keydown', handleEscapeClick);
    };
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/promocodes" replace />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/promocodes"
            element={<Promocodes rowData={rowData} />}
          />
          <Route
            path="/ambassadors"
            element={
              <Ambassadors
                rowData={rowData}
                isOpen={isPopupOpen}
                onClose={closePopup}
                onClick={handleClick}
              />
            }
          />
          <Route path="/content" element={<Content rowData={rowData} />} />
          <Route path="/send-merch" element={<SendMerch rowData={rowData} />} />
          <Route path="/budget" element={<Budget rowData={rowData} />} />
          <Route path="/budget-price" element={<BudgetPrice rowData={rowData} />} />
          <Route
            path="/budget-info"
            element={<Budget rowData={rowData} />}
          />
          <Route
            path="/loyalty-programm"
            element={<Loyalti rowData={rowData} />}
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/add-faq" element={<AddFAQ />} />
          <Route path="/faq/edit-faq" element={<EditFAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History rowData={HISTORY} />} />
          <Route path="/notices" element={<Notices rowData={HISTORY} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
