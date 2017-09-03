# hapi-space-madness ![](https://travis-ci.org/mingder78/hapi-space-madness-keycloak.svg?branch=master)

keycloak-plugin


## Install

```bash
$ npm install hapi-space-madness-keycloak
```


## Usage

```javascript
const Plugin = 'hapi-space-madness-keycloak';
{
    plugin: {
        register: Plugin,
        options: {
            a: 1
        }
    }
},
```
test
```bash
curl http://localhost:8080/test
```


## License

MIT