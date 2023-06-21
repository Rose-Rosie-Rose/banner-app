import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { UserContextProvider } from './components/contexts/user'
import HomePage from './pages/home'
import SignInPage from './pages/signin'
import SingupPage from './pages/singup'
import SearchPage from './pages/search'

/*
BrowserRouter = Context 이다. Router 관련된 정보를 제공해준다.
Route = 특정 path로 들어왔을 때 어떤 컴포넌트를 보여줄지 정의한다.
Routes = 주소에 맞게 Route 을 노출한다.
*/

const App = () => {
  return <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SingupPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
}

export default App