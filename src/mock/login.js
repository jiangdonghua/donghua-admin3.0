import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'http://stdl.qq.com/stdl/newtabcms/icon/0042_100.png',
    name: 'Super Admin'
  },
  editor: {
    role: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://github.com/fluidicon.png',
    name: 'Normal Editor'
  },
  super: {
    role: ['super'],
    token: 'super',
    introduction: '我是super',
    avatar: 'http://stdl.qq.com/stdl/newtabcms/icon/0079_100.png',
    name: 'Normal Super'
  }
}

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
