// Please read the README.md to understand what to do. Happy Coding !
const fetchUserData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();

    const modifiedUsers = usersData.map((user) => ({
      Name: user.name,
      Username: user.username,
      Email: user.email,
      Address: user.address.street,
      Phone: user.phone,
      Website: user.website,
      Company: user.company.name,
    }));
    console.log("Modified User Data:");
    console.log(modifiedUsers);

    const bizUsers = modifiedUsers.filter((user) =>
      user.Email.endsWith(".biz")
    );

    console.log("Users with .biz Domain Email:");
    console.log(bizUsers);

    const sortedUsers = modifiedUsers.sort((a, b) =>
      a.Name.localeCompare(b.Name)
    );
    console.log("Sorted User Data:");
    console.log(sortedUsers);
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("the fetch operation is finished");
  }
};
fetchUserData();
