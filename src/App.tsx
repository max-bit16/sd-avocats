import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Competences from './pages/Competences'
import Contentieux from './pages/competences/Contentieux'
import DroitCommercial from './pages/competences/DroitCommercial'
import DroitSocietes from './pages/competences/DroitSocietes'
import DroitTravail from './pages/competences/DroitTravail'
import MobiliteInternationale from './pages/competences/MobiliteInternationale'
import Equipe from './pages/Equipe'
import Bengu from './pages/equipe/Bengu'
import Antonine from './pages/equipe/Antonine'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/competences', element: <Competences /> },
  { path: '/competences/contentieux', element: <Contentieux /> },
  { path: '/competences/droit-commercial', element: <DroitCommercial /> },
  { path: '/competences/droit-des-societes', element: <DroitSocietes /> },
  { path: '/competences/droit-du-travail', element: <DroitTravail /> },
  { path: '/competences/mobilite-internationale', element: <MobiliteInternationale /> },
  { path: '/notre-equipe', element: <Equipe /> },
  { path: '/notre-equipe/bengu-sulusoglu', element: <Bengu /> },
  { path: '/notre-equipe/antonine-darricau', element: <Antonine /> },
  { path: '/contact', element: <Contact /> },
  { path: '/mentions-legales', element: <MentionsLegales /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
