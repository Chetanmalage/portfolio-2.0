// Copies dist/index.html to dist/404.html so React Router works on GitHub Pages
import { copyFileSync } from 'fs'
import { resolve } from 'path'

const distDir = resolve(process.cwd(), 'dist')

try {
    copyFileSync(
        resolve(distDir, 'index.html'),
        resolve(distDir, '404.html')
    )
    console.log('✓ Created 404.html for SPA routing')
} catch (err) {
    console.error('Failed to create 404.html:', err)
    process.exit(1)
}