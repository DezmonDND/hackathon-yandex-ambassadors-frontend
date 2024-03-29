import React from "react";
import {
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { ExportButton } from "../Buttons/ExportButton";
import useExportXSLX from "../../hooks/exportXSLX"

function Toolbar({ checkboxSelection, columns = null, children, showExportButton }) {
  const config = useExportXSLX(columns)

  return (
    <GridToolbarContainer
      sx={{ margin: "24px 32px 16px 4px" }}
      style={{ maxWidth: "1246px", flexWrap: "nowrap" }}
    >
      <GridToolbarQuickFilter
        InputProps={{ disableUnderline: true }}
        placeholder="Поиск"
        sx={{
          ".MuiInputBase-root": {
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            paddingLeft: "8px",
            paddingBottom: 0,
          },
        }}
        style={{
          maxWidth: "1156px",
          width: "100%",
        }}
      ></GridToolbarQuickFilter>
      {children}
      {showExportButton && (
        <ExportButton
          config={config}
          startIcon={false}
          sx={{
            color: "#FFFFFF",
            backgroundColor: "#1d6bf3",
            minWidth: "132px",
            height: "34px",
            fontWeight: "400",
            padding: "0",
            fontSize: "14px",
            textTransform: "none",
          }}
        />
      )}
    </GridToolbarContainer>
  );
}

export default Toolbar;
