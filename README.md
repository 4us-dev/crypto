# 4us-dev crypto

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=alert_status)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=coverage)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=code_smells)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=4us-dev_crypto&metric=security_rating)](https://sonarcloud.io/dashboard?id=4us-dev_crypto)

![Build and Tests](https://github.com/4us-dev/crypto/workflows/Build%20and%20Tests/badge.svg)
[![npm-package](https://badge.fury.io/js/%404us-dev%2Fcrypto.svg)](https://www.npmjs.com/package/@4us-dev/crypto)
[![issues](https://img.shields.io/github/issues/4us-dev/crypto)](/issues)
[![dependencies](https://img.shields.io/david/4us-dev/crypto)](https://david-dm.org/4us-dev/crypto)
[![dev-dependencies](https://img.shields.io/david/dev/4us-dev/crypto)](https://david-dm.org/4us-dev/crypto?type=dev)
[![downloads](https://img.shields.io/npm/dw/@4us-dev/crypto)](https://www.npmjs.com/package/@4us-dev/crypto)
![size](https://img.shields.io/bundlephobia/min/@4us-dev/crypto)
[![license](https://img.shields.io/npm/l/@angular/cli.svg)](/LICENSE)

Install with [npm](https://www.npmjs.com/)

```sh
npm i @4us-dev/crypto
```

### Introduction

`@4us-dev/crypto` is a lib to help developers with encryption and encoding.

## Usage

- [Base64](#base64)
  - [encode](#encode)
  - [decode](#decode)
- [Base64Url](#base64url)
  - [encode](#encode)
  - [decode](#decode)
- [sha256](#sha256)
  - [Defining output encode](#definingoutputencode)

### Base64

```js
import { base64 } from '@4us-dev/crypto';
```

#### encode

```js
base64.encode('teste+encode+');
// output
// dGVzdGUrZW5jb2RlKw==
```

#### decode

```js
base64.decode('dGVzdGUrZW5jb2RlKw==');
// output
// teste+encode+
```

### Base64Url

```js
import { base64Url } from '@4us-dev/crypto';
```

#### encode

```js
base64Url.encode('teste+encode+');
// output
// dGVzdGUrZW5jb2RlKw
```

#### decode

```js
base64Url.decode('dGVzdGUrZW5jb2RlKw');
// output
// teste+encode+
```

### sha256

```js
import { sha256 } from '@4us-dev/crypto';
```

default encoding is `hex`

```js
sha256('4us dev');
// output
// 9c8813f0ca966480ebd17668f7850c85930e9a5e2425a71d9b1125c9026edf3d
```

#### defining output encode

```js
sha256('4us dev', 'base64');
// output
// nIgT8MqWZIDr0XZo94UMhZMOml4kJacdmxElyQJu3z0=
```
