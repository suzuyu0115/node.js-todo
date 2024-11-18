const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-form-input');
const taskDeleteDOM = document.querySelector('.delete-btn');

const showTasks = async () => {
  try {
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    const allTasks = tasks.map((task) => {
      return `
        <div class="task">
          <p>${task.title}</p>
          <p>${task.completed}</p>
          <a href="#">編集</a>
          <button class="delete-btn" data-id="${task._id}">削除</button>
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

// タスクを削除する
tasksDOM.addEventListener("click", async (event) => {
  const element = event.target;
  if (element.classList.contains("delete-btn")) {
    const id = element.dataset.id;
    showTasks();
    try {
      await axios.delete(`/api/v1/tasks/${id}`);
    } catch (err) {
      console.log(err);
    }
  }
});
