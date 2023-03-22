let problemName, problem, solution, lines;

async function getText() {
    const res = await fetch('../problems.txt');
    const text = await res.text();
    console.log(text);
    console.log(text.length);

    return text.split('\n');
}

lines = getText();

console.log(lines);