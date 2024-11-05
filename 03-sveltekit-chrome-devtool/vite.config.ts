import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
	const { API_KEY } = loadEnv(mode, process.cwd(), '')
	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'/api': {
					target: 'https://payment-incubator.apps.dev.cborbit.dev',
					changeOrigin: true,
					secure: false,
					ws: true,
					rewrite: (p) => p.replace(/^\/api/, ''),
					headers: {
						'X-API-KEY': API_KEY
					}
				}
			}
		}
	}
});
