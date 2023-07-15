export default function Alert(props) {
  return (
    <div style={{height:'55px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} m-0 alert-dismissible fade show text-center text-capitalize`} role="alert">
          {/* ⚠️ This site is currently under construction. */}
          <strong>{props.alert.msg}</strong>
      </div>}
    </div>
  )
}
