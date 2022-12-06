import { useState } from "react";
import { TextField, Box, Typography, Button } from "@mui/material";
import Tableview from "./Tableview";
import loanjs from "loanjs";

export default function EmiCalculator() {
  const [AllData, setAllData] = useState({
    amount: "",
    intrest: "",
    month: "",
    year: "",
  });

  const hendleinput = (e) => {
    const { name, value } = e.target;
    setAllData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const [calculatedata, setcalculatedata] = useState([]);

  const hendlereset = (e) => {
    e.preventDefault();
    setAllData({
      amount: "",
      intrest: "",
      year: "",
    });
    setcalculatedata("");
  };

  const hendlesubmit = (e) => {
    e.preventDefault();
    // Get Form Data
    let principal = parseFloat(AllData.amount);
    let calculate_interest = parseFloat(AllData.intrest) / 12;
    let calculate_month = parseFloat(AllData.month);
    // count monthy payment
    let month_iner = (principal * calculate_interest) / 100;
    // Amounnt Data
    let monthly = Math.round(principal / calculate_month + month_iner);
    let interest = (principal * calculate_month * calculate_interest) / 100;
    let total_interest = Math.round(interest);
    // const month_data = monthly.toFixed(2);
    const total_pay = principal + total_interest;

    let obj = {
      total_pay,
      total_interest,
      monthly,
    };
    setcalculatedata(obj);
  };

  const [table, settable] = useState([]);

  function calculate_sheet() {
    let amount = AllData.amount;
    let month = AllData.month;
    let rate = AllData.intrest;

    let loan = new loanjs.Loan(amount, month, rate);
    settable(loan.installments);
    console.log(loan.installments);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "3rem",
        }}
      >
        <Box
          sx={{
            marginTop: "2rem",
            marginLeft: "2rem",
            width: 700,
            height: 520,
            backgroundColor: "ButtonHighlight",
          }}
        >
          <Typography variant="h4" align="center" marginTop="1rem">
            EMI Calculator
          </Typography>
          <form>
            <TextField
              type="number"
              label="Enter Amount"
              variant="outlined"
              name="amount"
              value={AllData.amount}
              onChange={hendleinput}
            />

            <TextField
              type="number"
              label="Enter Interest Rate"
              variant="outlined"
              name="intrest"
              value={AllData.intrest}
              onChange={hendleinput}
            />
            <TextField
              type="number"
              label="Enter Month"
              variant="outlined"
              name="month"
              value={AllData.month}
              onChange={hendleinput}
            />
            <div className="buttons">
              <Button variant="contained" size="large" onClick={hendlesubmit}>
                Calculate
              </Button>
              <Button variant="contained" size="large" onClick={hendlereset}>
                Reset
              </Button>
              <Button variant="contained" onClick={calculate_sheet}>
                Get Table View
              </Button>
            </div>
          </form>

          <div className="resultdata">
            <Box className="boxdata">
              Monthly payment {calculatedata.monthly}
            </Box>
            <Box className="boxdata">
              Total Interest {calculatedata.total_interest}
            </Box>
            <Box className="boxdata">
              Total Amount {calculatedata.total_pay}
            </Box>
          </div>
        </Box>
        <Tableview data={table} />
      </div>
    </>
  );
}
