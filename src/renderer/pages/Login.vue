<template>
	<div class="login">
		<div class="text-h6 text-black text-bold">L O G I N</div>
		<div>
			<q-input color="purple-12" v-model="username" label="Username">
				<template v-slot:prepend>
					<q-icon name="person	" />
				</template>
			</q-input>
		</div>
		<div>
			<q-input color="purple-12" v-model="password" label="Password" type="password">
				<template v-slot:prepend>
					<q-icon name="key" />
				</template>
			</q-input>
		</div>
		<div>
			<q-btn :loading="loading" color="primary" @click="Login()" style="width: 150px">
			Confirm
			<template v-slot:loading>
				<q-spinner-hourglass class="on-left" />
				Loggin...
			</template>
			</q-btn>
		</div>
		<div class="msg" v-if="msg">
			<p>{{ msg }}</p>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
//import axios from 'axios'

const username = ref("");
const password = ref("");
const loading = ref(false);
const msg = ref(null);

function Login() {
	this.loading = true;
	let data = JSON.stringify({
		username: this.username,
		password: this.password
	});
	this.axios.post("http://localhost:5094/api/Auth/login", data, {
		headers: {
			'accept': '*/*',
			'Content-Type': 'application/json'
		}
	}).then(res => {
		console.log(res);
		this.loading = false;
	});
}
</script>
<style scoped lang="scss">
div {
	margin-bottom: 20px;
}
.login {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	border-radius: 5px;
	background-color: white;
	padding: 30px;
}
.msg {
	color: red;
	text-align: left;
}
</style>