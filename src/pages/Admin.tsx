
import { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft, Save, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const { settings, updateSettings } = useAdmin();
  const [formData, setFormData] = useState(settings);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleSave = () => {
    updateSettings(formData);
    alert('Configurações salvas com sucesso!');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'placar083133G') {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Senha incorreta!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-golden text-center">
              <Lock className="w-8 h-8 mx-auto mb-2" />
              Acesso Administrativo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite a senha de acesso"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para Landing Page
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Landing Page
            </Button>
          </Link>
          <h1 className="text-3xl font-serif text-golden">Painel Administrativo</h1>
        </div>

        <div className="grid gap-6">
          {/* Configurações de Tipografia */}
          <Card>
            <CardHeader>
              <CardTitle className="text-golden">Configurações de Tipografia</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fontFamily">Fonte Principal para Títulos</Label>
                  <Select 
                    value={formData.fontFamily} 
                    onValueChange={(value) => handleInputChange('fontFamily', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Montserrat">Montserrat (Recomendado)</SelectItem>
                      <SelectItem value="Inter">Inter</SelectItem>
                      <SelectItem value="Playfair Display">Playfair Display</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links de Checkout e Ações */}
          <Card>
            <CardHeader>
              <CardTitle className="text-golden">Links de Ação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="checkoutLink">Link de Checkout (Botões CTA)</Label>
                  <Input
                    id="checkoutLink"
                    value={formData.checkoutLink}
                    onChange={(e) => handleInputChange('checkoutLink', e.target.value)}
                    placeholder="https://checkout.com/curso-automaquiagem"
                  />
                </div>
                <div>
                  <Label htmlFor="vslVideoLink">Link do Vídeo VSL</Label>
                  <Input
                    id="vslVideoLink"
                    value={formData.vslVideoLink}
                    onChange={(e) => handleInputChange('vslVideoLink', e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
                <div>
                  <Label htmlFor="testimonialsLink">Link dos Depoimentos</Label>
                  <Input
                    id="testimonialsLink"
                    value={formData.testimonialsLink}
                    onChange={(e) => handleInputChange('testimonialsLink', e.target.value)}
                    placeholder="https://youtube.com/playlist?list=..."
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Links Sociais e Contatos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-golden">Redes Sociais e Contatos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="instagramLink">Instagram</Label>
                  <Input
                    id="instagramLink"
                    value={formData.instagramLink}
                    onChange={(e) => handleInputChange('instagramLink', e.target.value)}
                    placeholder="https://instagram.com/sirlenefranca"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedinLink">LinkedIn</Label>
                  <Input
                    id="linkedinLink"
                    value={formData.linkedinLink}
                    onChange={(e) => handleInputChange('linkedinLink', e.target.value)}
                    placeholder="https://linkedin.com/in/sirlenefranca"
                  />
                </div>
                <div>
                  <Label htmlFor="emailContact">Email de Contato</Label>
                  <Input
                    id="emailContact"
                    value={formData.emailContact}
                    onChange={(e) => handleInputChange('emailContact', e.target.value)}
                    placeholder="mailto:contato@sirlenefranca.com"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pixel do Facebook */}
          <Card>
            <CardHeader>
              <CardTitle className="text-golden">Tracking e Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="facebookPixel">ID do Pixel do Facebook</Label>
                  <Input
                    id="facebookPixel"
                    value={formData.facebookPixel}
                    onChange={(e) => handleInputChange('facebookPixel', e.target.value)}
                    placeholder="123456789012345"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Cole apenas o ID numérico do seu pixel do Facebook
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Botão Salvar */}
          <Card>
            <CardContent className="pt-6">
              <Button onClick={handleSave} className="w-full" size="lg">
                <Save className="w-5 h-5 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
