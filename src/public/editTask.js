taskIdDOM = document.querySelector('.task-id');
taskEditDOM = document.querySelector('.task-title-edit');
taskEditFormDOM = document.querySelector('.task-editform');

const params = location.search;
const id = params.replace('?id=', '');

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, title } = task;
    taskIdDOM.textContent = _id;
    taskEditDOM.value = title;
  } catch (err) {
    console.log(err);
  }
}

showTask();

taskEditFormDOM.addEventListener('submit', async (e) => {

  const title = taskEditDOM.value;
  try {
    await axios.patch(`/api/v1/tasks/${id}`, { title: title });
  } catch (err) {
    console.log(err);
  }
});
