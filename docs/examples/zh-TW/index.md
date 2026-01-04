# 範例

本部分展示各種範例和用例。

## Markdown 功能

### 程式碼區塊

```javascript
// JavaScript 範例
function greet(name) {
  console.log(`你好，${name}！`);
}

greet('世界');
```

```python
# Python 範例
def greet(name):
    print(f"你好，{name}！")

greet("世界")
```

### 自訂容器

::: tip 專業提示
使用自訂容器在文件中突出顯示重要資訊。
:::

::: warning 注意
這是一條需要注意的警告訊息。
:::

::: danger 嚴重
這表示嚴重問題或破壞性更改。
:::

::: details 顯示程式碼範例
```typescript
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: '張三',
  email: 'zhangsan@example.com'
};
```
:::

### 表格

| 功能 | v1 | v2 |
|------|----|----|
| 多語言 | ✅ | ✅ |
| 暗色模式 | ✅ | ✅ |
| 自訂組件 | ✅ | ✅ |

### 圖片

將圖片放在 `docs/public/images/` 目錄中並引用：

```markdown
![替代文字](/images/example.png)
```

## Vue 組件

您可以在 Markdown 中直接使用 Vue 組件：

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<button @click="count++">計數：{{ count }}</button>
```

