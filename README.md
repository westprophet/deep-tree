# Base Deep Tree v1

## Introduction

This document provides an overview of the project structure based on React.js.

### Goals

- Solve the problem of a lack of a unified component structure
- Reduce the number of files with a large number of lines
- Organize the `components` folder for easy project scaling
- Increase code readability in large projects
- Facilitate project refactoring
- Increase the flexibility of the project architecture

## Basics

The architecture is based on OOP principles. Knowledge of these practices will help to better utilize the potential of
this architecture.

Frontend — working with visual representation of information.

## Data Types

Always start with T (short for Type) and are written in PascalCase, for example, like this:
**TReportDetail**

## Component Classes

Visually any layout can be divided into three conditional categories:

- **Pages (pages)**
- **Sections (sections)**
- **Elements (components)**

### Project Structure

The project is based on an architecture that mirrors the design and nesting of components, divided into pages, sections,
and elements.

### Component Hierarchy

- **Pages**
  - Page (pages)
  - View (views)
- **Sections**
  - Modal (modals)
  - SideBar (sidebars, mobile menus, navigation control elements)
  - PopUp (popups)
  - Aside (may not have navigation control elements)
- **Elements**
  - UI
  - Component

### Component Types

- **UI components**: Typically small UI components
- **Business components**: Perform business logic

### Project Structure

1. The project is based on components that can be classified as `Pages`, `Sections`, `Components`.
2. The project has a hierarchy: `Pages → Sections → Components` (pages contain sections, sections contain components).

### Component Naming

1. Components should be named in PascalCase format.
2. Sections should have `_Section` suffixes (e.g., `HeaderSection`, `FooterSection`).
3. Closed sections have the following suffixes:

- Modals: `_Modal` (e.g., `AddUserModal`)
- SideBar: `_Sidebar` (e.g., `FilterSidebar`)
- Aside: `_Aside` (e.g., `MenuAside`)
- Popups: `_PopUp` (e.g., `ProfilePopUp`)

4. Pages have `_Page` suffixes (e.g., `MainPage`, `ContactUsPage`).
5. Components may not have special suffixes.

## Example Component Structure

Any `tsx` component is a folder named after the component.
The component contains several files:

- `index.ts` - root file (**mandatory**)
- `ComponentName.tsx` - component file, matches the folder name (**mandatory**)
- `ComponentName.module.scss` - style file, if any
- `ComponentName.types.ts` - types for the component
- `ComponentName.validation.ts` - validation functions, if needed

Example structure of the `ComponentName` component:

```ts
// JavaScript
ComponentName
|-- index.ts
|-- ComponentName.tsx
|-- ComponentName.module.scss
|-- ComponentName.types.ts
|-- ComponentName.validation.ts
|-- images
|   |-- banner.min.png
|   |-- openIcon.svg
|-- components
|   |-- Title
|   |-- SomeList
|   |-- AddButton
|-- sections
|   |-- HeadSection
|   |-- FootSection
|-- modals
|   |-- AddModal
|   |-- ConfirmModal
|-- types
|   |-- TComponentNameStateType.ts
|-- ui
|   |-- ButtonUI
|   |-- IconButton
|-- hooks
|   |-- useSort.ts
|   |-- useFilter.ts
|-- utils
|   |-- getNextAvaliableItem.ts
|   |-- getPrevAvaliableItem.ts
|-- helpers
|   |-- convertOneTypeToAnotherType.ts
|-- api
|   |-- index.ts
|   |-- routes
|       |-- getSomeThing.ts
|       |-- putSomeThing.ts
```

## Levels of Nesting and Functionality Layers

### Introduction to Layers and Levels

The concept of layer hierarchy in deep-tree architecture is similar to the logic of *namespace* in JS. Namespaces are
used to organize code, prevent naming conflicts, and logically group code in software applications.

In deep-tree architecture, the system organizes components or elements as a tree, where each element has access to its
parent and its own child elements.

### Levels

Nesting levels have designations and are used to orient the nesting level of components.

- **Root Level**
- **First Depth Level**
- **Second Depth Level**
- **Third Depth Level and Beyond**

### Functionality Layers

Or functionality layers serve specific tasks at each level.

- **Component Layer**
- **Section Layer**
- **Utility Layer**
- **Hook Layer**
- **UI Component Layer**
- etc.

Example directory structure with level designations:

```ts
// JavaScript
// Root Level component HomePage
|-- index.ts
|-- HomePage.tsx
|-- HomePage.module.scss
|-- components  
|   |-- ArrowButton
|   |   |-- ArrowButton.module.scss
|   |   |-- ArrowButton.tsx
|   |   |-- index.ts
|-- sections  
|   |-- BannerSection
|   |   |-- sections  
|   |   |   |-- SliderSection
|   |   |   |   |-- components  
|   |   |   |   |   |-- Slide
|   |   |   |   |   |   |-- Slide.module.scss
|   |   |   |   |   |   |-- Slide.tsx 
|   |   |   |   |   |   |-- index.ts
|   |   |   |   |-- SliderSection.module.scss
|   |   |   |   |-- SliderSection.tsx
|   |   |   |   |-- index.ts
|   |   |   |-- ControlSection
|   |   |       |-- ControlSection.module.scss
|   |   |       |-- ControlSection.tsx
|   |   |       |-- index.ts
|-- utils  
|   |-- createSomeThing.ts
|   |-- convertSomeThing.ts
|-- hooks 
|   |-- useInitialSlider.ts
|-- ui  
|   |-- Hero
|   |   |-- Hero.module.scss
|   |   |-- Hero.tsx
|   |   |-- index.ts
```

## Architectural Principles

- The less code, the better
- The simpler, the better
- Code should be as readable and transparent as possible
- The single responsibility principle should be observed
- Similar problems should be solved in similar ways
- Child components can use parent components
- Problems are solved at their level or above
- Divide and conquer (adhere to a modular approach)

## Disadvantages

### Code Duplicates

With poor knowledge of the project and architecture, code duplicates may occur. In practice, code duplicates are
minimal.

### Deep Nesting

It may be difficult to navigate the project directory due to deep nesting.

# Extended Deep Tree

Extended documentation including exact code examples and recommendations

## Managers (Contexts)

Managers are a functional layer that serve as nodes for passing logic between different levels and layers.

Structurally, managers can be divided into two types: simple and complex
