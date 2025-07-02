import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";
import { cn } from "@/lib/utils";

interface City {
  name: string;
  lat: number;
  lng: number;
  color: string;
  size: number;
}

const cities: City[] = [
  { name: "北京", lat: 39.9042, lng: 116.4074, color: "#ff0000", size: 0.03 },
  { name: "上海", lat: 31.2304, lng: 121.4737, color: "#00ff00", size: 0.025 },
  { name: "深圳", lat: 22.3193, lng: 114.1694, color: "#0000ff", size: 0.02 },
  { name: "纽约", lat: 40.7128, lng: -74.0060, color: "#ffff00", size: 0.025 },
  { name: "洛杉矶", lat: 34.0522, lng: -118.2437, color: "#ff00ff", size: 0.02 },
  { name: "伦敦", lat: 51.5074, lng: -0.1278, color: "#00ffff", size: 0.02 },
  { name: "巴黎", lat: 48.8566, lng: 2.3522, color: "#ffa500", size: 0.02 },
  { name: "东京", lat: 35.6762, lng: 139.6503, color: "#800080", size: 0.025 },
];

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002;
    }
  });

  const convertLatLngToVector3 = (lat: number, lng: number, radius: number) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
  };

  return (
    <group>
      {/* 地球本体 */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#1a1a2e"
          wireframe={false}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* 地球网格 */}
      <Sphere args={[2.01, 32, 32]}>
        <meshBasicMaterial
          color="#16213e"
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* 城市标记点 */}
      <group ref={pointsRef}>
        {cities.map((city, index) => {
          const position = convertLatLngToVector3(city.lat, city.lng, 2.02);
          return (
            <mesh key={index} position={position}>
              <sphereGeometry args={[city.size, 16, 16]} />
              <meshBasicMaterial color={city.color} />
            </mesh>
          );
        })}
      </group>

      {/* 环境光 */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
}

export const GithubGlobe = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full h-96 relative", className)}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">我的足迹</h2>
        <p className="text-gray-300 text-lg">
          探索世界，记录每一次旅程
        </p>
      </div>
      
      {/* 简化版地图展示 */}
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-lg overflow-hidden">
        {/* 动态背景效果 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-100"></div>
          <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
        </div>
        
        {/* 中心文字 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🌍</div>
            <p className="text-white text-lg font-semibold">全球足迹地图</p>
            <p className="text-gray-300 text-sm">点亮世界每一个角落</p>
          </div>
        </div>
      </div>

      {/* 城市列表 */}
      <div className="mt-6 bg-black/20 backdrop-blur-sm p-4 rounded-lg">
        <div className="flex flex-wrap gap-2 justify-center">
          {cities.map((city, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-sm text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: city.color }}
              />
              {city.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
