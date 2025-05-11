# ⚡ SocialConnect

**SocialConnect** est une application Angular moderne qui simule un mini réseau social en utilisant l’API gratuite [JSONPlaceholder](https://jsonplaceholder.typicode.com).

Cette application permet de :

* Consulter une liste d’utilisateurs
* Voir les détails d’un utilisateur (email, entreprise, adresse…)
* Afficher les posts de cet utilisateur
* Consulter les détails d’un post
* Lire les commentaires associés à un post
* Naviguer dynamiquement entre utilisateurs, posts et commentaires

> 💡 Le tout dans un **thème sombre futuriste** avec effets visuels : néon, glassmorphism, transitions douces.

---

## 🚀 Lancer le projet en local

### 1. Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/social-connect.git
cd social-connect
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur Angular

```bash
ng serve
```

### 4. Ouvrir l’application

👉 [http://localhost:4200](http://localhost:4200)

---

## 🛠️ Stack technique

* **Angular 17+**
* **TypeScript**
* **SCSS** (design fait à la main)
* **Angular Router**
* **API REST JSONPlaceholder**
* **Responsive design avec CSS Grid**

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── components/         # Composants réutilisables (user-card, post-card, etc.)
│   ├── pages/              # Pages principales (user-list, user-detail, post-list, post-detail)
│   ├── services/           # Services pour appels API
│   ├── models/             # Interfaces TypeScript
│   └── app-routing.module.ts
│   └── app.module.ts
```

---

## 🎨 Design UI

Le projet est stylisé 100% manuellement en SCSS avec un thème :

* **Dark mode élégant**
* **Effets glow / néon / glass**
* **Animations et hover interactifs**
* **Police lisible et moderne**

---

## 📱 API utilisée

Données récupérées depuis l’API :
👉 [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

* `GET /users`
* `GET /posts`
* `GET /comments`
* `GET /posts?userId=X`
* `GET /comments?postId=X`

---

## 📸 Fonctionnalités en résumé

👉 Liste des utilisateurs
👉 Détail utilisateur avec infos complètes
👉 Liste des posts par utilisateur
👉 Détail d’un post et ses commentaires
👉 Navigation fluide entre utilisateurs ↔ posts ↔ commentaires
👉 Affichage par e-mail via un lien dans les commentaires

---

## 👨‍💼 Auteur

Projet réalisé par **\[LCS-93]** — dans un but pédagogique avec Angular.

