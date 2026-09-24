 {/* Topbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="text-xl font-bold">
            MyApp
          </a>
        </div>

        <div className="flex-none">
          <button className="btn btn-primary">
            Login
          </button>
        </div>
      </div>

      {/* Sidebar + Main */}
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-base-100 p-4">
          <ul className="menu w-full">
            <li>
              <a className="active">Dashboard</a>
            </li>

            <li>
              <a>Profile</a>
            </li>

            <li>
              <a>Settings</a>
            </li>

            <li>
              <a>Logout</a>
            </li>
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2">
            Welcome to my application.
            <h1 className="hero-content"> this is h1</h1>
          </p>
        </main>

      </div>