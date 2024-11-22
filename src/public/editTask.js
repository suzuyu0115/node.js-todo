taskIdDOM = document.querySelector('.task-id');
taskEditDOM = document.querySelector('.task-title-edit');

const params = location.search;
const id = params.replace('?id=', '');

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    console.log(task);
    const { _id, completed, title } = task;
    taskIdDOM.textContent = _id;
    taskEditDOM.value = title;
  } catch (err) {
    console.log(err);
  }
}

showTask();
