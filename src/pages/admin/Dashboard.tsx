import { useEffect } from 'react';
import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LogOut, FileText, Settings, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const { user, loading, isEditor, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!user || !isEditor)) {
      navigate('/auth');
    }
  }, [user, loading, isEditor, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isEditor) {
    return null;
  }

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/admin" className="text-xl font-bold text-foreground">
              WillRefrimix Admin
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="mr-2 h-4 w-4" />
                  View Site
                </Button>
              </Link>
              <Link to="/admin/posts">
                <Button 
                  variant={isActive('/admin/posts') ? 'default' : 'ghost'} 
                  size="sm"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Posts
                </Button>
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.email}
            </span>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
