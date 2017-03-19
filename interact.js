$(document).ready(function() {
    $('#calculatePick').click(function(v) {
        v.preventDefault();
        var array = $('#textBox').val();
        myArray = array.split(',').map(Number);
        //need to call function for it to work
        calculatePick();
    });

    //CalculateMax function
    function calculateMax(arrayThing) {
        m = Math.max.apply(null, myArray);
        return m;
    };


    //CalculateAVg function

    function calculateAvg(arrayThing) {
        total = 0;
        for (i = 0; i < myArray.length; i++) {
            total += myArray[i];
        }
        cAvg = total / myArray.length;
        return cAvg;
    };


    //Function to determine which radio button was picked and to do the respective function
    function calculatePick() {
        if ($('#avg').is(':checked')) {
            $('#output').text("The average of the numbers is: " + calculateAvg(myArray));
        } else if ($('#max').is(':checked')) {
            $('#output').text("The maximum of the numbers is: " + calculateMax(myArray));
            calculateMax(myArray);
        } else {
            alert("Invalid ._. Please enter five numbers and select max or avg")
        }
    };
    //Can't seem to get form to clear
    $('#clearButton').click(function(v) {
        $('#textBox').text('').val;
        $('#nameOfFunction').text('')
        $('#output').text('')
        console.log("help")
    });

});
















// Previous Code
// $(document).ready(function() {
//     //Getting values fron box to store in var input
//     $("#textBox").keyup(function() {
//         input = $(this).val();
//         // turning strings into numbers
//         var myArray = input.split(",").map(Number);


//     });
//     //this works: console.log(math.max.apply(null,l);)
//     //works with dummy data (how can I get the numbers from textbox here?)
//     var myArray = [3, 4, 5, 6, 7];

//     function calculateMax(myArray) {
//         m = Math.max.apply(null, myArray);
//         return m;

//     }
//     calculateMax(myArray);
//     console.log(m);

//     //CalculateAVg function
//     var myArray1 = [1, 2, 4, 6, 7, 0, 9]

//     function calculateAvg(myArray1) {
//         total = 0;
//         for (i = 0; i < myArray1.length; i++) {
//             total += myArray1[i];
//             cAvg = total / myArray1.length;
//         }
//     }
//     calculateAvg(myArray1);
//     console.log(cAvg);

//     function switchAvg() {
//         var toggle = 0;
//     }

//     function switchMax() {
//         var toggle = 1;
//     }

//     function calculatePick() {
//         if (toggle = 0) {
//             calculateAvg(myArray);
//         } else
//             calculateMax(myArray);
//     }

//     function clear() {
//         location.reload();
//     }
// });