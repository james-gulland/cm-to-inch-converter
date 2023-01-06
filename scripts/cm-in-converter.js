// I know I could refactor this as 1 function but it was more about the css 
// at this point...

function convertToCM() {
  const num = document.getElementById("textInput").value;

  if (isNaN(num)) {
    document.getElementById("result").textContent = 'Enter a number you moron!';
  } else {
    const convertedNum = parseFloat(num * 2.54).toFixed(2);
    document.getElementById("result").textContent = convertedNum + ' cm';
  };
}

function convertToIN() {
  const num = document.getElementById("textInput").value;

  if (isNaN(num)) {
    document.getElementById("result").textContent = 'Enter a number you moron!';
  } else {
    const convertedNum = parseFloat(num * 0.39370).toFixed(2);
    document.getElementById("result").textContent = convertedNum + ' in';
  };
}