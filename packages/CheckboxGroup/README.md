# Checkbox 复选框

## 使用

在页面 `json` 中引入组件：

```json
// import in `page.json`:
"usingComponents": {
  "oak-checkbox": "path/to/your/oakui/Checkbox/checkbox",
  "oak-checkbox-group": "path/to/your/oakui/CheckboxGroup/checkbox-group"
}
```

## 代码演示

复选框
```html
<!-- use in `page.wxml` -->
<oak-checkbox-group value="{{selected}}" bind:change="onChangeGroup">
    <oak-checkbox 
        wx:for="{{list}}" 
        wx:key="{{item.id}}"
        ext-class="checkbox" 
        name="{{item}}"
    >复选框 {{item.value}}</oak-checkbox>
</oak-checkbox-group>
```

设置最多选 N 项
```html
<!-- use in `page.wxml` -->
<oak-checkbox-group value="{{maxSelected}}" bind:change="onChangeMax" max="{{2}}">
    <oak-checkbox 
        wx:for="{{list}}" 
        wx:key="{{item.id}}"
        ext-class="checkbox" 
        name="{{item}}"
    >复选框 {{item.value}}</oak-checkbox>
</oak-checkbox-group>
```

## APIS

| 属性 | 说明 | 类型 | 默认值 |
|-----------|-----------|-----------|-------------|
| value | 选中项 | `Object` |  - |
| change | 事件绑定  | `Function` | - |
| max | 最大N项 | `Number` | - |

## 外部样式类

| 类名 | 说明 |
|-----------|-----------|
| ext-class | 作用于根节点 |
