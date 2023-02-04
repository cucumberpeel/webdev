function holiday() {
    const obj = document.querySelector("#my-date").value;
    let date = new Date(obj);
    let uDate = date.getUTCDate();
    let uMonth = date.getUTCMonth() + 1;
    let uYear = date.getUTCFullYear();
    console.log(uDate);
    console.log(uMonth);
    console.log(uYear);
    // 9/1/2022 to 8/31/2023
    // 9/5/22 - labor day
    // 10/10/2022 - indigenous people's day
    // 11/23/2022 - fall break
    // 11/24 - 11/25/2022 - thanksgiving recess
    // 12/23/22 - 1/2/23 - winter recess
    // 1/16/23 - mlk day
    // 2/20/23 - president's day
    // 3/13 - 3/19/2023 - spring break

    // for holidays that span multiple days
    // [start year, start month, start day, end day, holidays array index]
    const multi_day = new Array(2);
    multi_day[0] = [2022, 11, 24, 25, 3];
    multi_day[1] = [2022, 12, 23, 31, 4];
    multi_day[2] = [2023, 1, 1, 2, 4];
    multi_day[3] = [2023, 3, 13, 19, 7];

    // for holidays that are one day long
    // [year, month, day, holidays array index]
    const single_day = new Array(2);
    single_day[0] = [2022, 9, 5, 0];
    single_day[1] = [2022, 10, 10, 1];
    single_day[2] = [2022, 11, 23, 2];
    single_day[3] = [2023, 1, 16, 5];
    single_day[4] = [2023, 2, 20, 6];

    // the content that should be outputted for each holiday
    const holidays = new Array(2);
    holidays[0] = ["Labor Day", "labor-day.jpeg", "Peter Suciu, 2021, via " + '<a href="clearancejobs.com">www.clearancejobs.com</a>.'];
    holidays[1] = ["Indigenous People's Day", "indigenous-day.jpg", "bsmith91, 2021, via " + '<a href="blogs.gw.edu">blogs.gw.edu</a>.'];
    holidays[2] = ["Fall Break", "fall-break.jpg", "2019, via " + '<a href="newsroom.unl.edu">newsroom.unl.edu</a>.'];
    holidays[3] = ["Thanksgiving Recess", "thanksgiving.jpg", "Russ Kavalhuna, 2019, via " + '<a href="hfcc.edu">hfcc.edu</a>.'];
    holidays[4] = ["Winter Recess", "winter-recess.jpeg", "Sherwood School News, 2021, via " + 
    '<a href="ses.pendleton.k12.or.us">ses.pendleton.k12.or.us</a>.'];
    holidays[5] = ["Martin Luther King, Jr. Day", "mlk-day.jpeg", "Prince William County Office of Communication, 2022, via " + 
    '<a href="princewilliamliving.com">princewilliamliving.com</a>.'];
    holidays[6] = ["Presidents' Day", "presidents-day.jpg", "Getty Images, 2019, via " + '<a href="makeitgrateful.com">makeitgrateful.com</a>.'];
    holidays[7] = ["Spring Break", "spring-break.png", "2020, via " + '<a href="asiasociety.org">asiasociety.org</a>.'];

    // if within 9/1/2022 to 8/31/2023
    if ((uYear == 2022 && uMonth >= 9) || (uYear == 2023 && uMonth < 9)) {
        // check for multiple-day holidays
        for (let i = 0; i < multi_day.length; i++) {
            cur = multi_day[i];
            if (uYear == cur[0] && uMonth == cur[1] && (uDate >= cur[2] && uDate <= cur[3])) {
                console.log("multiple-day holiday detected");
                document.querySelector("#output").innerHTML = uMonth + "/" + uDate + "/" + uYear + " is part of " + holidays[cur[4]][0] 
                + "!" + '<img src="images/' + holidays[cur[4]][1] + '" />' + holidays[cur[4]][2];
                return;
            }
        }
        // check for single-day holidays
        for (let i = 0; i < single_day.length; i++) {
            cur = single_day[i];
            if (uYear == cur[0] && uMonth == cur[1] && uDate == cur[2]) {
                console.log("single-day holiday detected");
                document.querySelector("#output").innerHTML = uMonth + "/" + uDate + "/" + uYear + " is " + holidays[cur[3]][0] 
                + "!" + '<img src="images/' + holidays[cur[3]][1] + '" />' + holidays[cur[3]][2];
                return;
            }
        }
        console.log("valid input but no holiday detected");
        document.querySelector("#output").innerHTML = uMonth + "/" + uDate + "/" + uYear + " is not an NYU holiday :(" + '<img src="images/frown.jpg" />';
    }
    else {
        console.log("invalid date");
        document.querySelector("#output").innerHTML = "Enter a date between 9/1/2022 and 8/31/2023!";
        return;
    }
}