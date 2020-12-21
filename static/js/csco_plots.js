// Trace1 for the Greek Data

d3.csv("../static/js/Total_CSCO.csv",function(stock_data) {
  console.log(stock_data)


  dates = []
  predicted_close = []
  actual_close = []
  adj_date = []
  future_dates = []
  future_prices = []

  for (var i = 0; i < stock_data.length; i++){
    dates.push(stock_data[i].Date)
    actual_close.push(stock_data[i].Close)
    predicted_close.push(stock_data[i].Predicted_Close)
    adj_date.push(stock_data[i].Adj_Date)
    future_dates.push(stock_data[i].Dates)
    future_prices.push(stock_data[i].Future_Values)
  }

  var trace1 = {
    x: dates,
    y: actual_close,
    type: "line",
    name: "CSCO Close",
  };
  
  var trace2 = {
    x: dates,
    y: predicted_close,
    type: "line",
    name: "CSCO Predicted Close",
  };

  var trace3 = {
    x: future_dates,
    y: future_prices,
    type: "line",
  };
  console.log(predicted_close)


  var data = [trace1, trace2, trace3];
  
  // Apply the group barmode to the layout
  var layout = {
    title: "CSCO Actual Data verus Predicted Data",
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("plot", data, layout);
  
});

