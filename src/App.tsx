import './App.css';
import MetaRender from './metaRender'
import { PageJson } from './interface/pageJson';
const pageJson2: PageJson= {
  "XinForm477": {
      "style": {
          "position": "absolute",
          "left": "335px",
          "top": "147px",
          "zIndex": 100
      },
      "comId": "XinForm477",
      "comType": "XinForm",
      "groupType": "container",
      "childList": {
          "XinInput487": {
              "comId": "XinInput487",
              "comType": "XinInput",
              "groupType": "controlCin",
              "label": "学生姓名",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "attributeValue": "",
              "required": true
          },
          "XinInput588": {
              "comId": "XinInput588",
              "comType": "XinInput",
              "groupType": "controlCin",
              "label": "学院名称",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true
          },
          "XinInput531": {
              "comId": "XinInput531",
              "comType": "XinInput",
              "groupType": "controlCin",
              "label": "年级班级",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true
          },
          "XinNumber601": {
              "comId": "XinNumber601",
              "comType": "XinNumber",
              "groupType": "controlCin",
              "label": "数学成绩",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true
          },
          "XinNumber561": {
              "comId": "XinNumber561",
              "comType": "XinNumber",
              "groupType": "controlCin",
              "label": "语文成绩",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true
          },
          "XinNumber542": {
              "comId": "XinNumber542",
              "comType": "XinNumber",
              "groupType": "controlCin",
              "label": "英语成绩",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true
          },
          "XinNumber547": {
              "comId": "XinNumber547",
              "comType": "XinNumber",
              "groupType": "controlCin",
              "label": "成绩排名",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "required": true,
              "allowClear": true,
              "attributeValue": 1
          },
          "XinInput553": {
              "comId": "XinInput553",
              "comType": "XinInput",
              "groupType": "controlCin",
              "styleCss": "{\n \"width\":\"200px\"\n}",
              "label": "老师评语",
              "allowClear": true,
              "required": true,
              "attributeValue": ""
          }
      },
      "styleCss": "{\n \"width\":\"600px\",\n \"display\":\"flex\",\n \"flexWrap\":\"wrap\",\n \"justifyContent\":\"space-between\"\n}",
      "layout": "horizontal",
      "colon": true
  },
  "XinButton757": {
      "style": {
          "position": "absolute",
          "left": "864px",
          "top": "413px",
          "zIndex": 100
      },
      "comId": "XinButton757",
      "comType": "XinButton",
      "groupType": "controlCin",
      "attributeValue": "提交成绩",
      "actionJs": {
          "click": "const studentName = findNodeByComId('XinInput487',xinCtx).attributeValue;\nconst groupName = findNodeByComId('XinInput588',xinCtx).attributeValue;\nconst gradeName = findNodeByComId('XinInput531',xinCtx).attributeValue;\nconst math = findNodeByComId('XinNumber601',xinCtx).attributeValue;\nconst chinese = findNodeByComId('XinNumber561',xinCtx).attributeValue;\nconst english = findNodeByComId('XinNumber542',xinCtx).attributeValue;\nconst sort = findNodeByComId('XinNumber547',xinCtx).attributeValue;\nconst speak = findNodeByComId('XinInput553',xinCtx).attributeValue;\n\nconsole.log(studentName, groupName, gradeName, math, chinese, english, sort, speak)\nif([studentName, groupName, gradeName, math, chinese, english, sort, speak].includes('')){\n  window.antd.message.error('表单字段不能为空')\n  return;\n}\nxinComEvent.sendAjax('create','StudentGrade', {\n  studentName,\n  groupName,\n  gradeName,\n  math,\n  chinese,\n  english,\n  sort,\n  speak\n},(res) => {\n  if(res.data) {\n    xinComEvent.toPageById('pageInfo_1699960857670')\n  }\n})"
      }
  }
}

function App() {
  return (
    <div className="App">
      <MetaRender pageJson={pageJson2}/>
    </div>
  );
}

export default App;
