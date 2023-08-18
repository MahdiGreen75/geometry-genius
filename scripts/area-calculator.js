function getNumFromInpField(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValueNum = parseFloat(inputFieldValueString);
    return inputFieldValueNum;
}

function setAreaValueToTextElement(textElementId, value) {
    const textElement = document.getElementById(textElementId);
    const fixedDecimalValue = value.toFixed(2);
    textElement.innerText = fixedDecimalValue;
}

function calculateTriangleArea() {
   const b = getNumFromInpField("baseTriangle");
   const h = getNumFromInpField("heightTriangle");
   const area = 0.5 * b * h;
   setAreaValueToTextElement("triangleAreaShow", area);
}

function calculateReatangleArea() {
    const w = getNumFromInpField("rectangleWidth");
    const h = getNumFromInpField("rectangleLength");
    const area = w * h;
    setAreaValueToTextElement("rectangleAreaShow", area);
}

function calculateParallelogramArea() {
    const b = getNumFromInpField("parallelogramBase");
    const h = getNumFromInpField("parallelogramHeight");
    const area = b * h;
    setAreaValueToTextElement("prallelogramAreaShow", area);
}