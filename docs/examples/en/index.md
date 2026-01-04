# Examples

This section showcases various examples and use cases.

## Markdown Features

### Code Blocks

```javascript
// JavaScript example
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

```python
# Python example
def greet(name):
    print(f"Hello, {name}!")

greet("World")
```

### Custom Containers

::: tip Pro Tip
Use custom containers to highlight important information in your documentation.
:::

::: warning Note
This is a warning message that requires attention.
:::

::: danger Critical
This indicates a critical issue or breaking change.
:::

::: details Show Code Example
```typescript
interface User {
  name: string;
  email: string;
}

const user: User = {
  name: 'John',
  email: 'john@example.com'
};
```
:::

### Tables

| Feature | v1 | v2 |
|---------|----|----|
| Multi-language | ✅ | ✅ |
| Dark Mode | ✅ | ✅ |
| Custom Components | ✅ | ✅ |

### Images

Place images in `docs/public/images/` and reference them:

```markdown
![Alt text](/images/example.png)
```

## Vue Components

You can use Vue components directly in Markdown:

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<button @click="count++">Count: {{ count }}</button>
```

