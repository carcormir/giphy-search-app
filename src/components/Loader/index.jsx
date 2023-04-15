import './styles.css'

export default function Loader ({ position }) {
  const classType = `lds-ring ${position}`
  return (
    <div className={classType}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
