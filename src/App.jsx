import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, useKeyboardControls } from '@react-three/drei'
import { KeyboardControls } from '@react-three/drei'
import { useRef } from 'react'
import './App.css'

function Stage()
{
  const boxRef = useRef()
  useFrame(() => {
    boxRef.current.rotation.y += 0.01
    boxRef.current.rotation.x += 0.01
  })
  return (
    <Box ref={boxRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  )
};

function App() {
  const [show, setShow] = useState(0)

  return (
    <>
      
      <Canvas Camera={{
        position: [0, 0, 5],
        fov: 75,
      }}>
      
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stage />
      </Canvas>
    </>
  )
}

export default App
