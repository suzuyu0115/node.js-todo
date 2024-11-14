const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-form-input');

const showTasks = async () => {
  try {
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    const allTasks = tasks.map((task) => {
      return `
        <div class="task">
          <p>${task.title}</p>
          <a href="#">編集</a>
          <button>削除</button>
        </div>
      `;
    }).join("");

    tasksDOM.innerHTML = allTasks;
  } catch (err) {
    console.log(err);
  }
}

showTasks();

formDOM.addEventListener('submit', async (e) => {
  const title = taskInputDOM.value;
  try {
    await axios.post('/api/v1/tasks', { title: title });
    showTasks();
    taskInputDOM.value = "";
  } catch (err) {
    console.log(err);
  }
});
