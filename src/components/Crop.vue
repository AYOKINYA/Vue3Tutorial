<template>
    <div id="app">
	<cropper
		src="https://images.pexels.com/photos/226746/pexels-photo-226746.jpeg"
		@change="onChange"
	/>
</div>    
</template>

<script>
import { ref } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

export default {
	components: {
		Cropper,
	},

	methods: {
		
	},
	setup() {
		
		let coord = ref({
			width: 0,
			height: 0,
			left: 0,
			top: 0
		});
		let image = ref(null);

		const onChange = ({ coordinates, canvas }) => {
			console.log(coordinates, canvas);
			coord = coordinates;
			image = canvas.toDataURL();
		};

		return {
			coord,
			image,
			onChange
		}
	}
}

</script>

<style scoped>

.cropper {
	height: 600px;
	background: #DDD;
}

</style>