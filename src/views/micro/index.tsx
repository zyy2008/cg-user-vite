import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'micro',
  setup() {
    return () => (
      <div>
        1232222
        <micro-app name="appname-vite" url="http://localhost:8001/" iframe />
      </div>
    );
  },
});
