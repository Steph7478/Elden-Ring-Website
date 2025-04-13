import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layouts/mainLayout/mainLayout'
import Home from '../pages/Home/index'
import Guias from '../pages/Guias/index'
import Noticias from '../pages/Noticias/index'
import Personajes from '../pages/Personajes/index'
import Objetos from '../pages/Objetos/index'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/guias" element={<Guias />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/objetos" element={<Objetos />} />
      </Route>
    </Routes>
  )
}

{
  /* <Route
            path={privateRoutes.tournaments.teams.details}
            element={<TeamLayout />}
          >
            <Route index element={<TournamentTeamAthletes />} />
          </Route>

          <Route
            path={privateRoutes.tournaments.matches.details}
            element={<MatchLayout />}
          >
            <Route index element={<MinuteByMinute />} />

            <Route
              path={privateRoutes.tournaments.matches.lineup}
              element={<Lineup />}
            />
          </Route> */
}
