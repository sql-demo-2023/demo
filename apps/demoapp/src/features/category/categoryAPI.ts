export async function fetchCategory(category = 1): Promise<{ data: number }> {
  const response = await fetch('/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category }),
  });
  const result = await response.json();

  return result;
}
