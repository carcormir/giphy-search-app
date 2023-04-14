import './styles.css'

export default function Loader ({ position }) {
  const classType = `lds-ring ${position}`
  console.log(classType)
  return (
    <div className={classType}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
