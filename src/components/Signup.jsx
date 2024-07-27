const Signup=()=>{
    return (
        <>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Enter Your Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="/">
      <div className="modal-body">
      <div className="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    required
    aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
        Password required 8 characters Must
    </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"
    />
    <label className="form-check-label ps-2 pt-1" htmlFor="exampleCheck1">Remember Me</label>
  </div>

      </div>
      <div className="modal-footer">
        
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      </form>
    </div>
  </div>
</div>
        </>
    )
}
export default Signup;