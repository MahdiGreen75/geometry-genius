
/**************************************************************************/
/**********
 * User manual of "clickHandlerProducer" function
 * formulaConstant = firstCosntant X secondParameter X thirdParameter]
 * if the formula coantains no constants.such as area = a* b  . Then,
 * the firstConstant should be 1 forcefully. rest of the parameter will
 * be as it is. secondParameter and thirdParameter will be added by this
 * function.
 */


function clickHandlerProducer(inputId1, inputId2, whereToShowId, formulaConstant) {

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

    return function() {
        const x = getNumFromInpField(inputId1);
        const y = getNumFromInpField(inputId2);
        const area = formulaConstant * x * y;
        setAreaValueToTextElement(whereToShowId, area);
    }
}

/***************************************************************************/

let calculateTriangleArea = clickHandlerProducer("baseTriangle", "heightTriangle","triangleAreaShow", 0.5);
let calculateReatangleArea = clickHandlerProducer("rectangleWidth", "rectangleLength", "rectangleAreaShow", 1);
let calculateParallelogramArea = clickHandlerProducer("parallelogramBase", "parallelogramHeight", "prallelogramAreaShow", 1);
let calculateRhombusArea = clickHandlerProducer("rhombusDiagonalOne", "rhombusDiagonalTwo", "rhombusAreaShow", 0.5);
let calculatePentagonArea = clickHandlerProducer("pentagonP", "pentagonB", "pentagonAreaShow", 1);
let calculateEllipseArea = clickHandlerProducer("ellipseA", "ellipseB", "ellipseAreaShow", 3.14);