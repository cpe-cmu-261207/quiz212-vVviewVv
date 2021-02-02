export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <table class="table is-bordered mb-3">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>{props.name}</td>
          <td>{props.gender}</td>
          <td>{props.age}</td>
        </tr>
      </tbody>
    </table>
  );
};
