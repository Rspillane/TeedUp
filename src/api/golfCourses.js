const BASE_URL = "/api/golf/courses";

export async function fetchGolfCourses(
  { page = 1, limit = 25, radius = 25 } = {}
) {
  const url = `${BASE_URL}?page=${page}&limit=${limit}&radius=${radius}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch golf courses");
  }

  return response.json();
}
