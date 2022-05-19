// scripts.js

let tradeData = [
    {sym: "AAPL", db: "01/01/2022", ns: 10, bp:200, ds:"02/01/2022", sp: 230},
    {sym: "AMZN", db: "01/04/2022", ns: 1, bp:3000, ds:"02/01/2022", sp: 3400},
    {sym: "COST", db: "01/08/2022", ns: 3, bp:400, ds:"02/01/2022", sp: 350},
    {sym: "TSLA", db: "02/12/2022", ns: 5, bp:700, ds:"02/01/2022", sp: 600}
];

window.onload = () => {
    loadTableData(tradeData);
};

function rd2dec(num){
    return Math.round(num*100)/100;
}


function loadTableData(tradeData){
    const tableBody = document.getElementById("tableData")
    let dataHtml = "";

    for (let trade of tradeData) {
        let prc = rd2dec(trade.sp - trade.bp);
        let pec = rd2dec(prc/trade.bp);
        let gain = rd2dec(prc*trade.ns);

        dataHtml += `<tr>
        <td>${trade.sym}</td>
        <td>${trade.db}</td>
        <td>${trade.ns}</td>
        <td>${trade.bp}</td>
        <td>${trade.ds}</td>
        <td>${trade.sp}</td>
        <td>${prc}</td>
        <td>${pec}</td>
        <td>${gain}</td>
        </tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

