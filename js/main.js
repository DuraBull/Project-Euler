let problemName, problem, solution;

async function getText() {
    const res = await fetch('../problems.txt');
    const text = await res.text();
    console.log(text);
}

getText();