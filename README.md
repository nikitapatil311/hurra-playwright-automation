# Hurra Chat Automation Framework (Playwright)

## Overview
This project demonstrates a basic test automation framework for the Hurra chat application using Playwright.

## Features Implemented
- UI Smoke Tests (Chat page load, UI validation, basic interaction)
- API Testing (Chat session endpoint validation)
- Authentication handling using storageState (login bypass)
- GitHub repository setup for version control

## Tech Stack
- Playwright (JavaScript)
- Node.js

## Project Structure
tests/
  smoke/
  api/
pages/
auth/

## How to Run
npm install
npx playwright test

## Future Improvements
- Page Object Model (POM) implementation
- Expanded chat test scenarios
- CI/CD integration using GitHub Actions
- Improved reporting and test coverage
