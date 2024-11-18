async function fetchProfileData() {
	const url =
		"https://raw.githubusercontent.com/MarceloHadad/js-developer-portfolio/master/src/data/profile.json";
	const response = await fetch(url);
	const profileData = await response.json();

	return profileData;
}
