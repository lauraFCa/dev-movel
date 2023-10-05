# Desenvolvimento Móvel

Disciplina de Desenvolvimento Móvel

Utilizando online:  
Plataforma [snack.expo](https://snack.expo.dev/)

## Trabalhando com Expo

Etapas de instalação: 

- Instalar expo: ``` npm install -g expo-cli ```
- Criar projeto: ``` npx create-expo-app NomeDoProjeto ```
- Inciar projeto: ``` expo start ``` (OU ``` npx expo ```)

Rodar o emulador, em um projeto react-native:  
``npx react-native run-android``


## Trabalhando diretamente com react-native

Instalação:

- Instalar react-native cli: ``` npm install -g react-native ```
- Criar projeto: ``` npx react-native init NomeDoSeuProjeto ```
- Iniciar projeto: ``` npm run android  ```

É possível trabalhar com expo dentro do react-native:  
1. Adicionar dependencia ao projeto (*package.json*):  
    ``` 
    "dependencies": {
        ...
        "expo": "~49.0.13",
        "expo-status-bar": "~1.6.0",
    }
    ```
2. Instalar dependencias: ``` npm i ```
3. Iniciar projeto com expo: ``` npx expo ```

## Assinando o *app*:

1. Criar chave de assinatura:  
    ```
    keytool -genkey -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
    ```
2. Configurar o arquivo *android/gradle.properties*:  
   ```
    MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
    MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
    MYAPP_UPLOAD_STORE_PASSWORD=senha-da-keystore
    MYAPP_UPLOAD_KEY_PASSWORD=senha-da-chave
   ```
3. Configurar o arquivo *android/app/build.gradle*:  
   ```
    signingConfigs {
    release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            ...
        }
    }
   ```
4. Gerar o apk assinado: (dentro da pasta *android*)  
    ``` ./gradlew bundleRelease ```  
    APK assinado é gerado em ``` android/app/build/outputs/bundle/release/ ```
