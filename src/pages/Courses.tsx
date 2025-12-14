import { useEffect, useState } from "react";
import { fetchGolfCourses } from "../api/golfCourses";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGolfCourses()
      .then((data) => {
        // Adjust if API nests data
        setCourses(data.data ?? data);
      })
      .catch(() => setError("Unable to load courses"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading courses…</p>;
  if (error) return <p>{error}</p>;

  return (
    <section>
      <h1>Golf Courses</h1>

      <div>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
