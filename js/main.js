let problemName, problem, solution, file;

async function getText() {
    const res = await fetch('../problems.txt');
    const text = await res.text();
    console.log(text);
    console.log(text.length);

    return text.toString();
}

file = getText();