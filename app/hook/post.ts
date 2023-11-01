export const post = async () => {
  const post = await fetch(`${process.env.BASE_URL}/api/database`);
  return post.json();
};

export const postById = async (id: string) => {
  const post = await fetch(`${process.env.BASE_URL}/api/database/${id}`, {
    cache: "no-cache",
  });
  return post.json();
};
