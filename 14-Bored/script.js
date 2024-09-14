// CONSTANT VARIABLES
const showActivity = document.getElementById('showActivity');
const acitvityInfo = document.getElementById('activityInfo');
const getActivityBTN = document.getElementById('getActivity');



const activityAPI = async () => {
    try{
        // Fetch data from an API
        const fetchWeatherData = await fetch('http://bored.api.lewagon.com/api/activity/');

        const boredActivity = await fetchWeatherData.json();
        console.log(boredActivity)

        return {
        type: boredActivity.type,
        activity: boredActivity.activity
        }
    } catch{
        showActivity.textContent = 'Error Found';
        acitvityInfo.textContent = 'Please try again'
    }
}

function displayActivity(activity){
    showActivity.textContent = activity.type;
    acitvityInfo.textContent = activity.activity;
}

const main = async ()=> {
  let details = await activityAPI();
  displayActivity(details);
  locationInput.focus();
};

getActivityBTN.addEventListener('click', ()=>{
    let getInfo = activityAPI();

    main()
});