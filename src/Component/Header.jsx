import React from 'react'

function Header() {
  return (
    <>
        <div className="header mt-3">
              <div>
                <h4>Current Details</h4>
              </div>
              <div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-primary"
                    type="button"
                    id="button-addon2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
    </>
  )
}

export default Header