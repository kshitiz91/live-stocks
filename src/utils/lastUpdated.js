const JustAdded = "Just Added";
const UpdatedFewMins = "A Few Seconds Ago";
export const lastUpdated = (prevDate)=>{
	if(!prevDate)
		return JustAdded;
	var currDate = new Date();
	prevDate = new Date(prevDate);
	if ((currDate.getUTCSeconds() - prevDate.getUTCSeconds()) <= 60)
		return UpdatedFewMins;

	if(currDate.getDate() - prevDate.getDate() >= 1)
		return (currDate.getDate() + ' ' + currDate.getMonth() + ' ' + currDate.toLocaleString('en-US',{hour: 'numeric', hour12: true }))
	else
		return currDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
}