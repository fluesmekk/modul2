
function isDateValid(dateString) {

        var dateNumber = dateString;

        //her deles opp Datoen du putter inn
        var day = dateNumber.substring(0,2);
        var month = dateNumber.substring(3,5);
        var year = dateNumber.substring(6, 10);
    

        //tar med seg variablene ovenifra
        return isLengthCorrect(dateNumber)  && 
        isDateCorrectlySetUp(dateNumber)    &&
        isYearCorrect(year)                 &&
        isMonthCorrect(month)               &&
        isDayCorrect(day, month, year);
    
};

    //skjekker lengde
    function isLengthCorrect(dateLength) {
        return (dateLength.length == 10);
    };

    //skjekker om datorekke er riktig oppsatt med . etter dato og måned.
    function isDateCorrectlySetUp(dateNumber) {
        return (dateNumber.charAt(2) == '.') && (dateNumber.charAt(5) == '.');
    };

    //skjekker om årstallet er over 0000 og under 9999.
    function isYearCorrect(year) {
        return ((parseInt(year) >= 0000) && (parseInt(year) <= 9999) && year.length == 4);
    };


    //skjekker om måneden er innefor 01-12
    function isMonthCorrect(monthParameter) {
        return ((parseInt(monthParameter) >= 01 && parseInt(monthParameter) <= 12) && monthParameter.length == 2);
    };

    //skjekker om det er ett skuddår

    
    function isLeapYear (year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
        
    };  
    
    //skjekker at datoer passer til måneden.
    function isDayCorrect(day, month, year) {
         if  ((month === '04' || month === '06' || month === '09' || month === '11') && (day <= '30' && day >= '01')) {
            return true; 
        } else if (month === '02' && isLeapYear(year) && day <= '29') {
            return true;
        } else if (month === '02' && !isLeapYear(year) && day >= '29') {
            return false;
        } else if ((month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') && day <= '31') {
            return true;
        } else {
            return false;      
        }
    }
      