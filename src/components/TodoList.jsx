export const TodoList = ({ item }) => {
  return (
    <label className="panel-block">
      <input type="checkbox" />
      {item.text}
    </label>
  );
};
