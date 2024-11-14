const tasksDOM = document.querySelector('.tasks');

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
