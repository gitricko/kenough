import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'https://payment-incubator.apps.dev.cborbit.dev',
				changeOrigin: true,
				secure: false,
				ws: true,
				rewrite: (p) => p.replace(/^\/api/, '')
			}
		}
	}
});
