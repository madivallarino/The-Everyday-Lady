import woman from './woman.jpeg'

const NavBar = () => {


    return (
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" ><img src={woman} alt="logo" width="100"/></a>
          <a class="navbar-brand" href="#">The Everyday Lady</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Furniture</a></li>
            <li><a class="dropdown-item" href="#">Bath</a></li>
            <li><a class="dropdown-item" href="#">Bedding</a></li>
            <li><a class="dropdown-item" href="#">Decor</a></li>
            <li><a class="dropdown-item" href="#">Lighting</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Shop All</a></li>
          </ul>
        </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Clothing
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Tops</a></li>
            <li><a class="dropdown-item" href="#">Bottoms </a></li>
            <li><a class="dropdown-item" href="#">Sweaters</a></li>
            <li><a class="dropdown-item" href="#">Jackets </a></li>
            <li><a class="dropdown-item" href="#">Dresses </a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Shop All</a></li>
          </ul>
        </li>
               <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LifeStyle
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Living</a></li>
            <li><a class="dropdown-item" href="#">Books</a></li>
            <li><a class="dropdown-item" href="#">Music</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Shop All</a></li>
          </ul>
        </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button class="btn btn-outline-success" type="submit">Cart</button>
          </div>
        </div>
      </nav>
    )
}

export default NavBar