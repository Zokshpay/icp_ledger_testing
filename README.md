Bug Report

I am facing an issue related to ICP index cannister getTransactions call. I have pushed a sample nodejs code to github repo here. https://github.com/Zokshpay/icp_ledger_testing

I have followed instructions provided at https://internetcomputer.org/docs/current/developer-docs/integrations/ledger/ledger-local-setup, to have local ledger and index cannister deployed with default values.

Problem i am facing is, `getTransactions` call `https://github.com/dfinity/ic-js/blob/main/packages/ledger-icp/src/index.canister.ts#L64` always returns empty transactions array in the response, but with correct balance value. 
But same call done via command line, returns the correct balance along with 'transactions' array with list of transactions. Please see attached screenshots for reference.

Any pointers on how to proceed, ll be great.

Node js call which returns empty transactions array, but correct balance in output.
<img width="854" alt="Screenshot 2024-02-23 at 13 41 23" src="https://github.com/Zokshpay/icp_ledger_testing/assets/165620/1314365e-b94e-4bcf-b8c1-31e8dd06cb46">


Command line call, where you can see the transactions array along with balance value.
<img width="1706" alt="Screenshot 2024-02-23 at 13 47 03" src="https://github.com/Zokshpay/icp_ledger_testing/assets/165620/7bb00453-8f5a-4b3e-a89f-7c0417e6c43f">


(min: i have tried the getTransactions call, by casting the maxResults/start args by casting in bigInt and without as well, and still get empty array.)
