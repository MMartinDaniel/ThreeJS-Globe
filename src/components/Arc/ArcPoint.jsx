import calcPosFromLatLonRad from '../../lib/calcPosFromLatLonRad'
import { React } from 'react'
import ArcWave from './ArcWave'
import { Color } from 'three'

const ArcPoint = ({ lat, lon }) => {
  const coordinates = calcPosFromLatLonRad(lat, lon, 1)

  return (
    <group>
      <mesh position={coordinates}>
        <sphereBufferGeometry args={[0.01, 20, 20]} />
        <meshBasicMaterial
          opacity={0.8}
          color={new Color('hsl(190,80%,40%)')}
          transparent={true}
        />
      </mesh>
      <ArcWave {...{ lat, lon }} />
    </group>
  )
}
export default ArcPoint
