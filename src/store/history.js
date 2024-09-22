import { acceptHMRUpdate, defineStore } from "pinia";

export const useHistory = defineStore("historyStore", () => {
  const history = ref([]);

  // 设置样式
  const setStyle = (state) => {
    if (state) return 'active'
    else return 'inactive'
  }

  // 设置历史记录
  const setHistory = (data) => {
    // 首先，将所有项的 isActivated 属性设置为 false
    history.value.forEach(item => {
      item.isActivated = false;
    });

    // 查找是否已经存在相同 title 的数据
    const exists = history.value.find(item => item.title === data.title);

    if (!exists) {
      // 如果不存在，则将新的数据的 isActivated 属性设置为 true 并添加到 history
      data.isActivated = true;
      history.value.push(data);
    } else {
      // 如果存在，将找到的项的 isActivated 设置为 true
      exists.isActivated = true;
    }
  };

  // 删除历史记录
  const deleteHistory = async (index) => {
    history.value.splice(index, 1);
    history.value.forEach((item) => {
      item.isActivated = false;
    })
    history.value[history.value.length - 1].isActivated = true;
  }


  return {
    history,
    setHistory,
    setStyle,
    deleteHistory
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useHistory, import.meta.hot));
}
