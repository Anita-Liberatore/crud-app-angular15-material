# Angular 15 CRUD Dashboard

A modern, responsive CRUD (Create, Read, Update, Delete) dashboard built with Angular 15 and Angular Material. This application demonstrates best practices for building data-driven web applications with comprehensive form handling, data management, and Material Design components.


## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher) & **npm** (v6.x or higher)
  - Download from [Node.js Official Website](https://nodejs.org/)
  - Verify installation: `node --version` and `npm --version`

- **Angular CLI** (v15.x)
  ```bash
  npm install -g @angular/cli
  ng version
  ```

- **JSON Server** (for mock API)
  ```bash
  npm install -g json-server
  ```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anita-Liberatore/crud-app-angular15-material.git
   cd crud-app-angular15-material
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the mock database**
   Create a `db.json` file in the root directory:
   ```json
   {
     "employees": [
       {
         "id": "199",
         "firstName": "Nancy",
         "lastName": "Gladdis",
         "email": "ngladdis5i@posterous.com",
         "dob": "2001-11-15T10:33:48Z",
         "gender": "Female",
         "education": "Graduate",
         "company": "Flashpoint",
         "experience": 20,
         "package": 17
       }
     ]
   }
   ```

## 🚀 Running the Application

1. **Start the mock API server**
   ```bash
   json-server --watch db.json
   ```
   The API will be available at `http://localhost:4200`

2. **Start the Angular development server**
   ```bash
   ng serve
   ```
   Navigate to `http://localhost:4200`


## 📝 Available Scripts

- **Development server**
  ```bash
  ng serve
  ```

- **Production build**
  ```bash
  ng build --configuration production
  ```

- **Run unit tests**
  ```bash
  ng test
  ```

- **Run end-to-end tests**
  ```bash
  ng e2e
  ```

- **Lint project**
  ```bash
  ng lint
  ```

## 🔧 Configuration

### Environment Variables

Create `environment.ts` and `environment.prod.ts` files in the `src/environments` directory:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:4200'
};
```

## 🔍 Testing

The project includes both unit tests and e2e tests:

```bash
# Run unit tests with coverage report
ng test --code-coverage

# Run e2e tests
ng e2e
```

## 📚 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Support

For support, email support@example.com or join our Slack channel.

## 🙌 Acknowledgments

- Angular Team for the fantastic framework
- Material Design Team for the UI components
- JSON Server Team for the mock API functionality
