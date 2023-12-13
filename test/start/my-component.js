import {ref} from 'vue';

export default {
	setup() {
		const count = ref(123);
		return {count};
	},
	template: `<p>count is {{ count }}</p>`
};