<template>
    <div id="root" class="root"></div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    const { ceil, random } = Math;
    class Position {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    class Cell extends Position {
        constructor(x, y, radius = 16) {
            super(x, y);
            this.radius = radius;
            this.opacity = random();
            this.speed = 0;
            this.opacity = this.opacity <= 0.4 ? 0.4 : this.opacity;
        }
        get topLeft() {
            return {
                x: this.x - this.radius,
                y: this.y - this.radius
            };
        }
        get topRight() {
            return {
                x: this.x + this.radius,
                y: this.y - this.radius
            };
        }
        get bottomRight() {
            return {
                x: this.x + this.radius,
                y: this.y + this.radius
            };
        }
        get bottomLeft() {
            return {
                x: this.x - this.radius,
                y: this.y - this.radius
            };
        }
    }
    const resizeCanvas = (canvas) => {
        const { innerWidth, innerHeight } = window;
        canvas.height = ceil(innerHeight);
        canvas.width = ceil(innerWidth);
    };
    const createCanvas = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        document.getElementById('root').appendChild(canvas);
        resizeCanvas(canvas);
        return [canvas, ctx];
    };
    const createCells = () => {
        const cells = [];
        for (let x = 0; x < ~~window.innerWidth; x += 8) {
            cells.push(new Cell(x, window.innerHeight - 8));
        }
        return cells;
    };
    const init = () => {
        const [canvas, ctx] = createCanvas();
        let cells = createCells();
        const animateCells = () => {
            const cellLen = cells.length;
            cells.forEach((cell) => {
                cell.speed += [-.1, 0.2, 0.3, 0.4][~~(Math.random() * 2)];
                cell.y -= cell.speed;
            });
            cells = cells.filter((cell) => cell.y >= 0);
            const curLen = cells.length;
            const diff = cellLen - curLen;
            for (let i = 0; i < diff; i++) {
                cells.push(new Cell(Math.random() * window.innerWidth, window.innerHeight - 16));
            }
        };
        const renderCells = () => {
            ctx.globalCompositeOperation = 'xor';
            cells.forEach((cell) => {
                ctx.save();
                ctx.beginPath();
                ctx.fillStyle = 'rgba(113, 255, 65, 0.849)';
                ctx.globalAlpha = cell.opacity;
                ctx.arc(cell.x, cell.y, cell.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                ctx.restore();
            });
            
        };
        const loop = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            animateCells();
            renderCells();
            requestAnimationFrame(loop);
        };
        renderCells();
        requestAnimationFrame(loop);
    };
    init();
})

</script>

<style  scoped>
html,
body,
.root {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgba(251, 244, 244, 0.342);
}
</style>