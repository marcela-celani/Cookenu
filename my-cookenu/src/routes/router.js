import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { 
    LoginPage,
    SignUpPage,
    FeedPage,
    RecipeDetailPage,
    AddRecipePage
} from '../pages'
import { Header } from '../components/header'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/signup' element={<SignUpPage/>} />
                <Route path='/feed' element={<FeedPage/>} />
                <Route path='/add-recipe' element={<AddRecipePage/>} />
                <Route path='/recipe/:id' element={<RecipeDetailPage/>} />
            </Routes>
        </BrowserRouter>
    )
}