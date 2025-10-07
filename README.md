# Shipping Project Backend

Backend created to manage and consult shippings.

## Requeriments

- Node.js: [Node.js](https://nodejs.org/)
- MongoDB: [MongoDB](https://www.mongodb.com/)

or

- Docker: [Docker](https://www.docker.com/)
- MongoDB: [MongoDB](https://www.mongodb.com/)

## Environment Variables

It's required to a .env file in the root directory with the follows values:

- `MONGO_USERNAME`: mongo username
- `MONGO_PASSWORD`: mongo password
- `MONGO_CLUSTER_NAME`: mongo cluster name

## Routes

### User

#### GET - `/api/v1/user`

#### GET - `/api/v1/user/<id>`

#### POST - `/api/v1/user`

-   body:
    | property name | value type |
    | ------------- | ---------- |
    | `FirstName` | string |
    | `lastName` | string |
    | `password` | string |

#### PUT - `/api/v1/user/<id>`

-   body:
    | property name | value type |
    | ------------- | ---------- |
    | `FirstName` | string |
    | `lastName` | string |
    | `password` | string |

#### DELETE - `/api/v1/user/<id>`

### Shipping

address:
| property name | value type |
| ------------- | ---------- |
| `address1` | string |
| `address2` | string |
| `state` | string |
| `city` | string |
| `country` | string |
| `zipCode` | number |

#### GET - `/api/v1/shipping`

#### GET - `/api/v1/shipping/<id>`

#### POST - `/api/v1/shipping`

-   body:
    | property name | value type |
    | ------------- | ---------- |
    | `sendById` | number |
    | `sendForId` | number |
    | `destination` | address |

#### PUT - `/api/v1/shipping/<id>`

-   body:
    | property name | value type |
    | ------------- | ---------- |
    | `sendById` | number |
    | `sendForId` | number |
    | `destination` | address |

#### DELETE - `/api/v1/shipping/<id>`

### Login

#### POST - `/api/v1/login`

-   body:
    | property name | value type |
    | ------------- | ---------- |
    | `userId` | number |
    | `password` | string |
