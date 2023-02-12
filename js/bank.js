/*  -------------------------
    Deposit and Balance Feild 
    -------------------------   */
// step 1: Add click event handler with the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the deposit amount from the deposit input Id
    const depositInput = document.getElementById('deposit-input');
    const depositString = depositInput.value;
    const deposit = parseFloat(depositString);
    // step 7: clear the deposit input
    depositInput.value = '';
    
    if(isNaN(deposit)){
        alert('Invalid input');
        return;
    }
    // step 3: get the Id "deposit-feild"
    const depositFeild = document.getElementById('deposit-feild');
    // for non-input element (other than input , textarea) use innerText to get the text
    const depositAmountString = depositFeild.innerText;
    const depositAmount = parseFloat(depositAmountString);
    // step 4: add numbers to set the total deposit
    const depositTotal = depositAmount + deposit;
    depositFeild.innerText = depositTotal;
    // step 5: get balance amount from balance-feild id
    const balanceFeild = document.getElementById('balance-feild');
    const balanceAmountString = balanceFeild.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    // step 6: calculate total balance amount
    const balanceTotal = balanceAmount + deposit;
    balanceFeild.innerText = balanceTotal;

});

/*  --------------------------
    Withdraw and Balance Feild 
    --------------------------  */
// step 1: Add click event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2: get the withdraw amount from the withdraw-input id
    const withDrawInput = document.getElementById('withdraw-input');
    const withDrawString = withDrawInput.value;
    const withDraw = parseFloat(withDrawString);
    // step 7: clear the withdraw input feild
    withDrawInput.value = '';

    if(isNaN(withDraw)){
        alert('Invalid input');
        return;
    }
    // step 3: get the id withdraw-feild
    const withDrawFeild = document.getElementById('withdraw-feild');
    const withDrawAmountString = withDrawFeild.innerText;
    const withDrawAmount = parseFloat(withDrawAmountString);
    // step 5: get balance amount from balance-feild id
    const balanceFeild = document.getElementById('balance-feild');
    const balanceAmountString = balanceFeild.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    
    if(withDraw > balanceAmount){
        alert('Insufficient Balance');
        return;
    }
    // step 4: add the number to get the withdraw total
    const withDrawTotal = withDrawAmount + withDraw;
    withDrawFeild.innerText = withDrawTotal;
    // step 6: calculate the total balance amount
    const balanceTotal = balanceAmount - withDraw;
    balanceFeild.innerText = balanceTotal;

});