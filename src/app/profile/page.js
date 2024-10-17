import Button from "@/components/button";

async function getProfileData() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

export default async function Profile(props) {
  const todos = await getProfileData();

  // console.log("todos", todos);

  console.log("props", props);
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        {todos.map((v, i) => (
          <li key={i}>{v.title}</li>
        ))}
      </ul>
      <Button title={"Clicked"} />
    </div>
  );
}

