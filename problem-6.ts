interface Profile {
	name: string;
	age: number;
	email: string;
}

const updateProfile = (profile: Profile, keyObj: Partial<Profile>) : Profile => {
	return { ...profile, ...keyObj };
};
// Sample Input :
const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, {age:26}));

// Sample Output:
