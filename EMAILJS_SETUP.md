# 📧 Guide Configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour que le formulaire de contact fonctionne.

## Qu'est-ce que EmailJS?

EmailJS est un service qui permet d'envoyer des emails directement depuis votre application frontend sans serveur backend.

## ✅ Étapes de Configuration

### 1. Créer un compte EmailJS

1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up Free"**
3. Créez un compte (email, mot de passe)
4. Vérifiez votre email

### 2. Créer un Email Service

1. Dans le dashboard, allez sur **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre email
5. Donnez un nom à votre service (ex: `gmail`)
6. **Notez votre Service ID** (vous en aurez besoin)

### 3. Créer un Template Email

1. Allez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template:

**Exemple de template:**

```
Nom du template: contact_form

Sujet: 📧 Nouveau message de {{name}}

Contenu:
---
Nom: {{name}}
Email: {{email}}
Sujet: {{subject}}

Message:
{{message}}
---

Répondre à: {{email}}
```

**Variables disponibles** (match les attributs `name` du formulaire HTML):
- `{{name}}` - Le nom
- `{{email}}` - L'email
- `{{subject}}` - Le sujet
- `{{message}}` - Le message

4. Cliquez sur **"Save"**
5. **Notez votre Template ID**

### 4. Obtenir votre Public Key

1. Dans le menu, allez sur **"Account"**
2. Allez dans l'onglet **"API Keys"**
3. Copiez votre **"Public Key"** (elle commence par `key_`)

## 🔧 Intégration dans le Code

### Option A: Variables d'Environnement (Recommandé)

1. Créez un fichier `.env.local` à la racine du projet:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
VITE_EMAILJS_PUBLIC_KEY=key_xxxxxxxxx
```

2. Remplacez les valeurs par vos vraies IDs

3. Modifiez `src/pages/Contact.jsx`:

```javascript
import emailjs from 'emailjs-com';

export const Contact = () => {
  // ... autres code ...

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current?.reset();
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  // ... reste du composant ...
};
```

### Option B: Directement dans le Code (Moins Sécurisé)

Si vous préférez ne pas utiliser de variables d'environnement:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    await emailjs.sendForm(
      'service_xxxxxxxxx',  // Votre Service ID
      'template_xxxxxxxxx', // Votre Template ID
      formRef.current,
      'key_xxxxxxxxx'       // Votre Public Key
    );
    
    setSubmitStatus('success');
    formRef.current?.reset();
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsLoading(false);
  }
};
```

## 📝 Configurer le Formulaire HTML

Assurez-vous que les attributs `name` du formulaire matchent les variables du template EmailJS:

```html
<form ref={formRef} onSubmit={handleSubmit}>
  <input type="text" name="name" placeholder="Votre nom" required />
  <input type="email" name="email" placeholder="Votre email" required />
  <input type="text" name="subject" placeholder="Sujet" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Envoyer</button>
</form>
```

⚠️ **Important**: Les attributs `name` doivent correspondre exactement aux variables dans le template!

## ✅ Tester

1. Démarrez votre app: `npm run dev`
2. Allez à la page Contact
3. Remplissez le formulaire avec des informations de test
4. Cliquez sur "Envoyer"
5. Vérifiez que vous recevez l'email

## 🐛 Dépannage

### "Failed to send email"

- Vérifiez que vos IDs sont corrects
- Vérifiez que vous avez configuré votre email service
- Vérifiez la console du navigateur pour plus de détails

### Je ne reçois pas d'emails

- Vérifiez que votre Service ID est correct
- Vérifiez que votre Template ID existe
- Vérifiez le dossier spam/junk

### Les variables ne se remplacent pas

- Vérifiez que les `name` du formulaire matchent les variables du template
- Les variables doivent être entre `{{` et `}}`

## 💡 Tips

1. **Tester votre template**: Dans EmailJS, utilisez le bouton "Send test email"
2. **Limite gratuite**: 200 emails/mois avec le plan gratuit
3. **Personnaliser l'email**: Vous pouvez ajouter du HTML et CSS dans le template
4. **Notifications**: Configurez les notifications pour recevoir une alerte à chaque message

## 🎨 Exemple de Template Avancé

```
Nom: contact_form_html
Type: HTML

Sujet: 🎉 Nouveau message de {{name}}

Contenu HTML:
---
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { background: #3b82f6; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
    .body { background: #f3f4f6; padding: 20px; }
    .footer { background: #1f2937; color: white; padding: 10px; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>💬 Nouveau Message</h1>
    </div>
    <div class="body">
      <p><strong>De:</strong> {{name}} ({{email}})</p>
      <p><strong>Sujet:</strong> {{subject}}</p>
      <hr>
      <p>{{message}}</p>
    </div>
    <div class="footer">
      <p>Répondre directement à: {{email}}</p>
    </div>
  </div>
</body>
</html>
---
```

## 📞 Support

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Forum EmailJS](https://github.com/emailjs-com/emailjs-sdk)

---

Une fois configuré, vos visiteurs pourront vous envoyer des messages directement depuis votre portfolio! 🚀
