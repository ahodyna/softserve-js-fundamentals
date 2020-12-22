exports.greeting = (name) => {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    
    if (currentHour >= 23 || currentHour < 5) {
       return currentDate +'\n' + 'Good night, ' + name;
    } else if (currentHour >= 5 && currentHour < 11) {
        return currentDate +'\n' +'Good morning, ' + name;
    } else if (currentHour >= 11 && currentHour < 17) {
       return currentDate +'\n' + 'Good day, ' + name;
    } else if (currentHour >= 17 && currentHour < 23) {
       return currentDate +'\n' + 'Good evening, ' + name;
    }
}
