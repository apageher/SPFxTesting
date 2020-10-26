# SPFx-Testing

## Summary

**Solución de SPFx para probar los test unitarios con Jest y Enzyme**

Para hacer uso de Jest y Enzyme habrá que instalar los siguientes paquetes como dependencias de desarrollo:
> npm i @types/enzyme @types/jest enzyme enzyme-adapter-react-16 identity-obj-proxy jest jest-junit react-test-renderer sinon @types/sinon ts-jest --save-dev

Modificar el package.json para incluir el script de jest
> Como es indica en (https://www.eliostruyf.com/sharepoint-framework-unit-tests-with-jest/)

Ejecutar el script de test:
> npm test

- Para el analisis de covertura: _npm test -- --coverage_
> En \proyecto\coverage\lcov-report\index.html crea un html con el reporte de covertura

- Para hacer un test a un solo fichero: _npm test -- Number.test.ts_
- Enzyme monta los componentes en memoria para poderlos testear con jest.


Más información de Jest y Enzyme:
> (https://github.com/pnp/sp-dev-fx-webparts/tree/master/samples/react-jest-testing)
> (https://www.eliostruyf.com/writing-unit-test-for-your-sharepoint-framework-components)
> (https://www.c-sharpcorner.com/article/spfx-unit-test-with-jest-and-enzyme)
> (https://kirtiprajapati.com/2019/08/08/unit-test-for-spfx-with-jest)
> (https://jestjs.io/docs/en/api)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)


## Solution

Solution|Author(s)
--------|---------
SPFx Global | Alvaro Peich

## Version history

Version|Date|Comments
-------|----|--------
1.1|March 10, 2021|Update comment
1.0|January 29, 2021|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**