import axios from 'axios'


// 一、默认配置
axios.defaults.baseURL = 'http://121.4.20.49:8403/api';
axios.defaults.timeout = 120000   // 默认值为0，表示永不超时

// 二、定义常用的请求方法(post、get、delete、put)
export function axiosPost(opt) {
    return request(opt, 'POST')
}
export function axiosGet(opt) {
    return request(opt, 'GET')
}
export function axiosDel(opt) {
    return request(opt, 'DELETE')
}
export function axiosPut(opt) {
    return request(opt, 'PUT')
}

// 三、定义ajax方法
/* 封装各种请求的参数
 * 规则1：delete/put/get详细，url路径包含id的
 * 规则2：post/put/patch，config中需要包含：data
 * 规则3：get方法，config中需要包含：params
 * 规则4：所有的请求，均需要添加请求头token
 *（1）opt为传入对象，包含url、params等信息.url为必填
 *（2）method，即为请求方法
 *（3）对params参数值进行处理
 *（4）请求头处理
 *（5）config对象
 *（6）请求url的特殊处理
 *（7）params参数和data参数的特殊处理
 *（8）发送请求，返回Promise对象
*/
function request(opt, method) {
    // 1.处理opt中params参数的值
    let params = {}
    if (opt.params) {
        // 1.1 对传入的参数进行深拷贝，防止传入的参数对象被页面上其他逻辑改变，导致签名错误
        params = JSON.parse(JSON.stringify(opt.params))
        if (method === 'GET') {
            params = {
                ...params
            }
        }
    } else {
        params = {}
    }

    // 1.2 axios会自动过滤值为undefined和null的参数，因此手动剔除这些参数，不让其参与签名，避免出现签名错误
    for (let key in params) {
        if (params[key] == null || params[key] === 'undefined') {
            delete params[key]
        }
    }

    // 2.处理请求头
    const headers = {
        Authorization: 'JWT ' + localStorage.getItem('loginToken')
        // Authorization: 'JWT ' + store.getters.getLogintoken
    }

    // 3.处理config对象
    const config = {
        method,
        headers
    }

    // 4.请求路径的统一处理
    if (method === 'PUT' || method === 'DELETE' || method === 'GET2') {
        // 4.1 处理url
        if (params.id) {
            opt.url = opt.url + params.id + '/'
        }
    }
    config.url = opt.url

    // 5.params参数和data参数的特殊处理
    method === 'GET' && (config.params = params)
    method === 'GET2' && (config.params = params)
    method === 'GET2' && (config.method = 'GET')
    method === 'PUT' && (config.data = params)
    method === 'POST' && (config.data = params)
    method === 'PATCH' && (config.data = params)

    // 6.后加，批量删除
    if (method === 'DELETE2') {
        config.data = params
        config.method = 'DELETE'
    }

    /* 7.发送请求，返回Promise对象
        A.状态码为[200,300)，走then
        B.其他均走catch
    */
    return new Promise((resolve, reject) => {
        axios(config).then(res => {
            // 7.1 未登录
            if (res.data.code === 401) {
                // 这里将来还可以进一步优化，利用refresh，实现无感刷新
                localStorage.clear()
                sessionStorage.clear()
                router.push('/login')
                reject(res.data)
            } else {
                // 7.2 错误和正确均走这里，code=200/400，交给业务模块自行处理
                resolve(res.data)
            }
        }).catch(res => {
            // 7.3 异常才走这里
            ElMessage.error('请求失败!')
            reject(res)
        })
    })
}

// 四、定义业务接口


/**
* 1.登录与个人中心相关
*/
export const login = params => axiosPost({ url: 'token/', params }) // Token登录
export const getCaptcha = params => axiosGet({ url: 'captcha/', params }) // 获取验证码
export const userInfo = params => axiosGet({ url: 'system/users/user_info/', params }) // 获取当前用户信息
export const userInfoEdit = params => axiosPut({ url: 'system/users/user_edit/', params }) // 修改用户信息
export const userChangePassword = params => axiosPut({ url: 'system/users/change_password/', params }) // 修改用户密码

/**
 * 3.用户管理（增删改查）
 */
export const userAdd = params => axiosPost({ url: 'system/users/', params })
export const userDel = params => axiosDel({ url: 'system/users/', params })
export const userEdit = params => axiosPut({ url: 'system/users/', params })
export const userList = params => axiosGet({ url: 'system/users/', params })
export const userDisable = params => axiosPut({ url: 'system/users/disableuser/', params }) // 禁用用户
export const userExport = params => axiosGet({ url: 'system/users/exportexecl/', params }) // 导出

/**
* 4.部门管理（增删改查）
*/
export const departAdd = params => axiosPost({ url: 'system/departs/', params })
export const departDel = params => axiosDel({ url: 'system/departs/', params })
export const departEdit = params => axiosPut({ url: 'system/departs/', params })
export const departList = params => axiosGet({ url: 'system/departs/', params })

/**
* 5.菜单管理（增删改查）
*/
export const menuAdd = params => axiosPost({ url: 'system/menus/', params })
export const menuDel = params => axiosDel({ url: 'system/menus/', params })
export const menuEdit = params => axiosPut({ url: 'system/menus/', params })
export const menuList = params => axiosGet({ url: 'system/menus/', params })
export const getMenuRouter = params => axiosGet({ url: 'system/menus/web_router/', params }) // 用户权限菜单
export const menuTree = params => axiosGet({ url: 'system/menu_tree/', params }) // 获取部门数据,获取菜单树

/**
* 6.按钮管理（增删改查）
*/
export const buttonAdd = params => axiosPost({ url: 'system/buttons/', params })
export const buttonDel = params => axiosDel({ url: 'system/buttons/', params })
export const buttonEdit = params => axiosPut({ url: 'system/buttons/', params })
export const buttonList = params => axiosGet({ url: 'system/buttons/', params })

/**
* 7.菜单按钮管理（增删改查）
*/
export const menuButtonAdd = params => axiosPost({ url: 'system/menu_buttons/', params })
export const menuButtonDel = params => axiosDel({ url: 'system/menu_buttons/', params })
export const menuButtonEdit = params => axiosPut({ url: 'system/menu_buttons/', params })
export const menuButtonList = params => axiosGet({ url: 'system/menu_buttons/', params })

/**
* 8.角色管理（增删改查）
*/
export const roleAdd = params => axiosPost({ url: 'system/roles/', params })
export const roleDel = params => axiosDel({ url: 'system/roles/', params })
export const roleEdit = params => axiosPut({ url: 'system/roles/', params })
export const roleList = params => axiosGet({ url: 'system/roles/', params })
export const roleDetal = (id) => axiosGet({ url: 'system/roles/' + id + '/' })

export const departTree = params => axiosGet({ url: 'system/dept_tree/', params }) // 获取部门数据,用于角色授权
export const menusAndButton = () => axiosGet({ url: 'system/roles/menus_and_button/' }) // 菜单对应的按钮
export const permissionSave = params => axiosPut({ url: 'system/permissions/', params }) // 权限管理 -- 保存

/**
 * 9.日志管理（删查）
 */
export const optLogDel = params => axiosDel({ url: 'system/logs/', params })
export const optLogList = params => axiosGet({ url: 'system/logs/', params })
export const optLogDelAll = params => axiosDel({ url: 'system/logs/deleteall/', params })
export const loginLogDel = params => axiosDel({ url: 'system/login_logs/', params })
export const loginLogList = params => axiosGet({ url: 'system/login_logs/', params })
export const loginLogDelAll = params => axiosDel({ url: 'system/login_logs/deleteall/', params })

/* =========================================================== #
# ******************* B.消息管理
# ============================================================ */

/**
* 1.短信推送计划（增删改查）
*/
export const smsPlanAdd = params => axiosPost({ url: 'message/smsplans/', params })
export const smsPlanDel = params => axiosDel({ url: 'message/smsplans/', params })
export const smsPlanEdit = params => axiosPut({ url: 'message/smsplans/', params })
export const smsPlanList = params => axiosGet({ url: 'message/smsplans/', params })
export const smsPlanPush = id => axiosGet({ url: 'message/smsplans/' + id + '/push/' })

/**
 * 2.消息发送明细（增删改查）
 */
export const smsUserAdd = params => axiosPost({ url: 'message/smsplanusers/', params })
export const smsUserDel = params => axiosDel({ url: 'message/smsplanusers/', params })
export const smsUserEdit = params => axiosPut({ url: 'message/smsplanusers/', params })
export const smsUserList = params => axiosGet({ url: 'message/smsplanusers/', params })

/**
 * 3.消息模板管理（增删改查）
 */
export const templateAdd = params => axiosPost({ url: 'message/smstemplates/', params })
export const templateDel = params => axiosDel({ url: 'message/smstemplates/', params })
export const templateEdit = params => axiosPut({ url: 'message/smstemplates/', params })
export const templateList = params => axiosGet({ url: 'message/smstemplates/', params })

/**
 * 4.系统消息管理（增删改查）
 */
export const messageAdd = params => axiosPost({ url: 'message/messages/', params })
export const messageDel = params => axiosDel({ url: 'message/messages/', params })
export const messageEdit = params => axiosPut({ url: 'message/messages/', params })
export const messageList = params => axiosGet({ url: 'message/messages/', params })

/* =========================================================== #
# ******************* C.测试平台
# ============================================================ */

/**
* 1.测试用例（增删改查）
*/
export const caseAdd = params => axiosPost({ url: 'sqtp/cases/', params }) //增
export const caseDel = params => axiosDel({ url: 'sqtp/cases/', params })  //删
export const caseEdit = params => axiosPut({ url: 'sqtp/cases/', params }) //改
export const caseList = params => axiosGet({ url: 'sqtp/cases/', params }) //查列表
export const caseRun = (id) => axiosGet({ url: 'sqtp/cases/' + id + '/run/' }) //执行
export const caseDetail = (id) => axiosGet({ url: 'sqtp/cases/' + id + '/' }) //查详细

export const getCaseTreeById = id => axiosGet({ url: 'sqtp/cases/' + id + '/case_tree/' }) // 根据项目ID获取用例树

/**
* 2.web接口（增删改查）
*/
export const requestAdd = params => axiosPost({ url: 'sqtp/requests/', params })
export const requestDel = params => axiosDel({ url: 'sqtp/requests/', params })
export const requestEdit = params => axiosPut({ url: 'sqtp/requests/', params })
export const requestList = params => axiosGet({ url: 'sqtp/requests/', params })

export const stepAdd = params => axiosPost({ url: 'sqtp/steps/', params })
export const stepDel = params => axiosDel({ url: 'sqtp/steps/', params })
export const stepEdit = params => axiosPut({ url: 'sqtp/steps/', params })
export const stepList = params => axiosGet({ url: 'sqtp/steps/', params })
export const stepDetail = (id) => axiosGet({ url: 'sqtp/steps/' + id + '/' })

/**
* 3.测试计划（增删改查）
*/
export const planAdd = params => axiosPost({ url: 'sqtp/plans/', params })
export const planDel = params => axiosDel({ url: 'sqtp/plans/', params })
export const planEdit = params => axiosPut({ url: 'sqtp/plans/', params })
export const planList = params => axiosGet({ url: 'sqtp/plans/', params })
export const planRun = (id) => axiosGet({ url: 'sqtp/plans/' + id + '/run/' })
/**
* 4.测试报告（增删改查）
*/
export const reportAdd = params => axiosPost({ url: 'sqtp/reports/', params })
export const reportDel = params => axiosDel({ url: 'sqtp/reports/', params })
export const reportEdit = params => axiosPut({ url: 'sqtp/reports/', params })
export const reportList = params => axiosGet({ url: 'sqtp/reports/', params })
export const reportBatchDel = params => axiosBatchDel({ url: 'sqtp/reports/batch_delete/', params })

/**
* 5.项目管理（增删改查）
*/
export const projectAdd = params => axiosPost({ url: 'sqtp/projects/', params })
export const projectDel = params => axiosDel({ url: 'sqtp/projects/', params })
export const projectEdit = params => axiosPut({ url: 'sqtp/projects/', params })
export const projectList = params => axiosGet({ url: 'sqtp/projects/', params })
/**
* 6.环境管理（增删改查）
*/
export const envAdd = params => axiosPost({ url: 'sqtp/envs/', params })
export const envDel = params => axiosDel({ url: 'sqtp/envs/', params })
export const envEdit = params => axiosPut({ url: 'sqtp/envs/', params })
export const envList = params => axiosGet({ url: 'sqtp/envs/', params })

/* =========================================================== #
# ******************* D.定时任务
# ============================================================ */

/**
* 1.定时任务配置表
*/
export const jobAdd = params => axiosPost({ url: 'job/configs/', params })
export const jobDel = params => axiosDel({ url: 'job/configs/', params })
export const jobEdit = params => axiosPut({ url: 'job/configs/', params })
export const jobList = params => axiosGet({ url: 'job/configs/', params })
export const jobStartUp = id => axiosGet({ url: 'job/configs/' + id + '/startUp/' })
export const jobStopIt = id => axiosGet({ url: 'job/configs/' + id + '/stopIt/' })
export const jobRun = id => axiosGet({ url: 'job/configs/' + id + '/run/' })

