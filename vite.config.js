import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  /**
   * тут настроено пару удобных штук чтобы потом удобно импортировать файлы
   * 
   * в чем разница
   * если использовать классический подход, то если надо импортировать что-то в скрипт
   * который находится где-то далеко по дереву
   * к примеру
   * в скрипт
   * 
   * ./src/components/component.tsx
   * 
   * надо подключить картинку
   * 
   * ./src/assets/picture.png
   * 
   * то импорт будет выглядеть так
   * 
   * import pic from '../assets/picture.png'
   * 
   * уже не очень красиво
   * а если уровней больше, то еще и неудобно
   * да, IDE поможет, но все же
   * 
   * а с этими настройками тот же импорт будет выглядеть так
   * 
   * import pic from '@/assets/picture.png'
   * 
   * выглядит лучше и не запутаешься в уровнях папок
   */
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
})
