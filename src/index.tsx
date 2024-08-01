import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

kintone.events.on('mobile.portal.show', () => {
  const rootEl = kintone.mobile.portal.getContentSpaceElement()!
  const root = ReactDOM.createRoot(rootEl)
  root.render(<RouterProvider router={router} />)
})
