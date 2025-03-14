
import React, { useEffect, useRef } from 'react';

const BackgroundElements: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Fullerene nodes
    const nodes: Node[] = [];
    const nodeCount = Math.floor(window.innerWidth / 250); // Fewer nodes due to larger size
    
    interface Node {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }

    // Create random fullerene nodes with much larger sizes (5x larger than before)
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 100 + 150, // 5x larger: 150-250 range (was 30-50)
        vx: (Math.random() - 0.5) * 0.1, // Slower movement for larger elements
        vy: (Math.random() - 0.5) * 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005, // Slower rotation
        opacity: Math.random() * 0.3 + 0.1 // Keep similar transparency
      });
    }

    // Draw C60 fullerene (buckminsterfullerene)
    const drawFullerene = (x: number, y: number, radius: number, rotation: number, opacity: number) => {
      // Set the color to purple with transparency
      ctx.strokeStyle = `rgba(155, 135, 245, ${opacity})`;
      ctx.lineWidth = 2.5; // Increased line width for visibility
      
      // Draw pentagons and hexagons to mimic C60 structure
      const pentagons = 5;
      const hexagons = 8;
      
      // Draw pentagons
      for (let i = 0; i < pentagons; i++) {
        const angle = rotation + (Math.PI * 2 / pentagons) * i;
        const px = x + radius * 0.7 * Math.cos(angle);
        const py = y + radius * 0.7 * Math.sin(angle);
        
        ctx.beginPath();
        for (let j = 0; j < 5; j++) {
          const vertexAngle = angle + (Math.PI * 2 / 5) * j;
          const vx = px + radius * 0.3 * Math.cos(vertexAngle);
          const vy = py + radius * 0.3 * Math.sin(vertexAngle);
          if (j === 0) {
            ctx.moveTo(vx, vy);
          } else {
            ctx.lineTo(vx, vy);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
      
      // Draw hexagons on the "sides"
      for (let i = 0; i < hexagons; i++) {
        const angle = rotation + (Math.PI / 4) + (Math.PI * 2 / hexagons) * i;
        const px = x + radius * 0.5 * Math.cos(angle);
        const py = y + radius * 0.5 * Math.sin(angle);
        
        // Draw a hexagon (carbon ring)
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const vertexAngle = angle + (Math.PI * 2 / 6) * j;
          const vx = px + radius * 0.2 * Math.cos(vertexAngle);
          const vy = py + radius * 0.2 * Math.sin(vertexAngle);
          if (j === 0) {
            ctx.moveTo(vx, vy);
          } else {
            ctx.lineTo(vx, vy);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
      
      // Add some connectors between structures
      for (let i = 0; i < 3; i++) {
        const angle1 = rotation + (Math.PI * 2 / 3) * i;
        const angle2 = rotation + (Math.PI * 2 / 3) * ((i + 1) % 3);
        
        const px1 = x + radius * 0.85 * Math.cos(angle1);
        const py1 = y + radius * 0.85 * Math.sin(angle1);
        
        const px2 = x + radius * 0.85 * Math.cos(angle2);
        const py2 = y + radius * 0.85 * Math.sin(angle2);
        
        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.lineTo(px2, py2);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines between close nodes
      ctx.lineWidth = 0.8; // Slightly thicker connecting lines
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const node1 = nodes[i];
          const node2 = nodes[j];
          const distance = Math.sqrt(
            Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2)
          );
          
          if (distance < 500) { // Increased connection distance for larger nodes
            const opacity = 0.05 * (1 - distance / 500);
            ctx.strokeStyle = `rgba(155, 135, 245, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(node1.x, node1.y);
            ctx.lineTo(node2.x, node2.y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.rotation += node.rotationSpeed;
        
        // Bounce off edges with offset based on radius
        if (node.x > canvas.width + node.radius) node.x = -node.radius;
        if (node.x < -node.radius) node.x = canvas.width + node.radius;
        if (node.y > canvas.height + node.radius) node.y = -node.radius;
        if (node.y < -node.radius) node.y = canvas.height + node.radius;
        
        // Draw node (only fullerenes)
        drawFullerene(node.x, node.y, node.radius, node.rotation, node.opacity);
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default BackgroundElements;