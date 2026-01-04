# 示例

本部分展示各种示例和用例。

## Markdown 功能

### 代码块

```javascript
// JavaScript 示例
function greet(name) {
  console.log(`你好，${name}！`);
}

greet('世界');
```

```python
# Python 示例
def greet(name):
    print(f"你好，{name}！")

greet("世界")
```

### 自定义容器

::: tip 专业提示
使用自定义容器在文档中突出显示重要信息。
:::

::: warning 注意
这是一条需要注意的警告消息。
:::

::: danger 严重
这表示严重问题或破坏性更改。
:::

::: details 显示代码示例
```typescript
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: '张三',
  email: 'zhangsan@example.com'
};
```
:::

### 表格

| 功能 | v1 | v2 |
|------|----|----|
| 多语言 | ✅ | ✅ |
| 暗色模式 | ✅ | ✅ |
| 自定义组件 | ✅ | ✅ |

### 图片

将图片放在 `docs/public/images/` 目录中并引用：

```markdown
![替代文本](/images/example.png)
```

## Vue 组件

您可以在 Markdown 中直接使用 Vue 组件：

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<button @click="count++">计数：{{ count }}</button>
```

