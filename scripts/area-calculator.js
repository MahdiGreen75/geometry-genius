
/**************************************************************************/
/**********
 * User manual of "clickHandlerProducer" function
 * formulaConstant = firstCosntant X secondParameter X thirdParameter]
 * if the formula coantains no constants.such as area = a* b  . Then,
 * the firstConstant should be 1 forcefully. rest of the parameter will
 * be as it is. secondParameter and thirdParameter will be added by this
 * function.
 */

function clickHandlerProducer(inputId1, inputId2, whereToShowId, formulaConstant, identity) {

    function getNumFromInpField(inputId) {
        const inputField = document.getElementById(inputId);
        const inputFieldValueString = inputField.value;
        const inputFieldValueNum = parseFloat(inputFieldValueString);
        /*** Validation of the inputs ***/
        if (inputFieldValueNum < 0 || isNaN(inputFieldValueNum)) {
            alert("Invalid Input");
            return;
        }

        return inputFieldValueNum;
    }

    function setAreaValueToTextElement(textElementId, value) {
        const textElement = document.getElementById(textElementId);
        const fixedDecimalValue = value.toFixed(2);
        textElement.innerText = fixedDecimalValue;
    }

    

    return function () {
        const x = getNumFromInpField(inputId1);
        const y = getNumFromInpField(inputId2);
        
        /*** Validation of the inputs ***/
        if (!x || !y) {
            return;
        }
        const area = formulaConstant * x * y;
        setAreaValueToTextElement(whereToShowId, area);

        function areaCalculationEntry() {
            const areaEntry = document.getElementById("areaEntry");
            let count = areaEntry.childElementCount;
            const p = document.createElement("p");
            p.classList.add("flex", "flex-row", "justify-between", "items-center", "text-xs", "mb-1");
            p.innerHTML = `<span>${count}. ${identity}</span> 
                           <span class="flex flex-row items-center justify-end">${area}cm<sup>2</sup></span>
                           <button  class="rounded px-4 py-2 font-bold bg-sky-600 hover:bg-sky-700 text-white">Convert to m<sup>2</sup></button>`;
            areaEntry.appendChild(p);
        }
        areaCalculationEntry();
    }
}

/***************************************************************************/

let calculateTriangleArea = clickHandlerProducer("baseTriangle", "heightTriangle", "triangleAreaShow", 0.5, "Tringle");
let calculateReatangleArea = clickHandlerProducer("rectangleWidth", "rectangleLength", "rectangleAreaShow", 1, "Rectangle");
let calculateParallelogramArea = clickHandlerProducer("parallelogramBase", "parallelogramHeight", "prallelogramAreaShow", 1, "Paralleogram");
let calculateRhombusArea = clickHandlerProducer("rhombusDiagonalOne", "rhombusDiagonalTwo", "rhombusAreaShow", 0.5, "Rhombus");
let calculatePentagonArea = clickHandlerProducer("pentagonP", "pentagonB", "pentagonAreaShow", 1, "Pentagon");
let calculateEllipseArea = clickHandlerProducer("ellipseA", "ellipseB", "ellipseAreaShow", 3.14, "Ellipse");