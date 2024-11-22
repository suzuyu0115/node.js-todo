taskIdDOM = document.querySelector('.task-id');
taskEditDOM = document.querySelector('.task-title-edit');
taskEditFormDOM = document.querySelector('.task-editform');
completedDOM = document.querySelector('.completed');

const params = location.search;
const id = params.replace('?id=', '');

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, title } = task;
    taskIdDOM.textContent = _id;
    taskEditDOM.value = title;
    if (completed) {
      completedDOM.checked = true;
    }
  } catch (err) {
    console.log(err);
  }
}

taskEditFormDOM.addEventListener('submit', async (e) => {
  e.preventDefault();

  const title = taskEditDOM.value;
  taskCompleted = completedDOM.checked;
  try {
    await axios.patch(`/api/v1/tasks/${id}`, { title: title, completed: taskCompleted });
    window.location.href='./index.html'
  } catch (err) {
    console.log(err);
  }
});

showTask();
