<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue"
    @change="handelInputChange"/>
    <a-button type="primary" @click="addItemToList()">添加事项</a-button>

    <a-list bordered :dataSource="infoList" class="dt_list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-checkbox :checked="item.done" @change="(e) =>
          {cbStatusChanged(e, item.id)}">{{item.info}}</a-checkbox>

        <a slot="actions" @click="removeItemById(item.id)">删除</a>
        </a-list-item>

        <div slot="footer" class="footer">
          <span>{{unDoneLength}}条剩余</span>

          <a-button-group>
            <a-button :type="viewKey === 'all' ? 'primary' : 'default'" @click="changeList('all')">全部</a-button>
            <a-button :type="viewKey === 'undone' ? 'primary' : 'default'" @click="changeList('undone')">未完成</a-button>
            <a-button :type="viewKey === 'done' ? 'primary' : 'default'" @click="changeList('done')">已完成</a-button>
          </a-button-group>
          <a @click="clean">清除已完成</a>
        </div>
      </a-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['inputValue', 'viewKey']),
    ...mapGetters(['unDoneLength', 'infoList'])
  },
  methods: {
    // 监听文本框内容变化
    handelInputChange (e) {
      console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },
    // 向列表中新增 item 项
    addItemToList () {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框内容不能为空！')
      }
      this.$store.commit('addItem')
    },
    removeItemById (id) {
      console.log(id)
      this.$store.commit('removeItem', id)
    },
    cbStatusChanged (e, id) {
      console.log(e.target.checked)
      const param = {
        id: id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', param)
    },
    clean () {
      this.$store.commit('cleanDone')
    },
    changeList (key) {
      this.$store.commit('changeViewkey', key)
    }
  }
}
</script>

<style scoped>
#app {
  padding: 10px;
}

.my_ipt {
  width: 500px;
  margin-right: 10px;
}

.dt_list {
  width: 500px;
  margin-top: 10px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
