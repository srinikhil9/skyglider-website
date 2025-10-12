import React from 'react';
import Container from './components/Container';
import Button from './components/Button';

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl mb-8">🔍</div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-secondary mb-8">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="large">
              Go to Homepage
            </Button>
            <Button href="/product" variant="outline" size="large">
              View Product
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

