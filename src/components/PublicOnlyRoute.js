import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ProjectsContext from '../contexts/projects-context'
import UserContext from '../contexts/user-context'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
            {userContext => 
              !!userContext.user.id
                ? (
                  <Redirect
                    to={{
                      pathname: userContext.user.idle ? '/' : '/create',
                      state: { from: componentProps.location },
                    }}
                  />
                )
                : <Component {...componentProps} />
            }

        </UserContext.Consumer>
      )}
    />
  )
}
