taskIdDOM = document.querySelector('.task-id');

const params = location.search;
const id = params.replace('?id=', '');

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, completed, name } = task;
    taskIdDOM.textContent = _id;
  } catch (err) {
    console.log(err);
  }
}

showTask();
