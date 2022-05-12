import overloadProtection from 'overload-protection'

const config = {
  production: process.env.NODE_ENV !== 'development',
  errorPropagationMode: false, // dictate behavior: take over the response or propagate an error to the framework [default false]
  logging: false,
  logStatsOnReq: false,
}

export default overloadProtection('express', config)