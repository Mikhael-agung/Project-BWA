import React from 'react'
import Link from 'next/link'

export default function Button() {
  return (
    <div className="button-group d-flex flex-column mx-auto">
              <Link className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" href="/sign-up-photo-success" role="button">
                Create My Account
              </Link>
              <Link className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#" role="button">
                Terms & Conditions
              </Link>
            </div>
  )
}
