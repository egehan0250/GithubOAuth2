## GitHub OAuth2 Entegrasyonu

Bu depo, GitHub OAuth2 entegrasyonunu gerçekleştirmek için gerekli kodları ve talimatları içerir. Bu sayede kullanıcılar GitHub hesaplarıyla uygulamanıza giriş yapabilir ve uygulamanızın erişim izinlerini verebilirler.

## İçindekiler
- [Giriş](#giriş)
- [Gereksinimler](#gereksinimler)
- [GitHub Uygulaması Oluşturma](#github-uygulaması-oluşturma)
- [Client ID ve Client Secret Anahtarını Alma](#client-id-ve-client-secret-anahtarını-alma)
- [Callback URL (Geri Çağrı URL) Eklemek](#callback-url-geri-çağrı-url-eklemek)
- [Kullanım](#kullanım)

## Giriş

GitHub OAuth2, GitHub kimlik doğrulamasını uygulamanızla entegre etmek için basit bir kılavuzdur. Bu sayede kullanıcılar GitHub hesaplarıyla giriş yapabilir ve uygulamanıza erişim izinlerini kontrol edebilirsiniz.

## Gereksinimler

Başlamadan önce aşağıdakilere sahip olduğunuzdan emin olun:

- Bir GitHub hesabı
- Temel web geliştirme bilgisi
- Sisteminizde Node.js ve npm'in yüklü olması

## GitHub Uygulaması Oluşturma

Entegrasyona başlamak için öncelikle bir GitHub uygulaması oluşturmanız gerekiyor:

1. GitHub'a giriş yapın ve hesabınıza erişin.
2. Sağ üst köşede bulunan profil fotoğrafınıza tıklayın ve "Settings" (Ayarlar) seçeneğine gidin.
3. Sol menüde bulunan "Developer settings" (Geliştirici ayarları) sekmesini seçin.
4. "OAuth Apps" (OAuth Uygulamaları) bölümüne gidin ve "New OAuth App" (Yeni OAuth Uygulaması) düğmesine tıklayın.
5. Gerekli bilgileri doldurun:
   - "Application name" (Uygulama adı): Uygulamanızın adını girin.
   - "Homepage URL" (Anasayfa URL'si): Uygulamanızın anasayfa URL'sini girin.
   - "Authorization callback URL" (Yetkilendirme geri çağrı URL'si): Kimlik doğrulama işlemi tamamlandığında kullanıcıların yönlendirileceği URL'yi girin.
6. "Register application" (Uygulamayı kaydet) düğmesine tıklayın.

## Client ID ve Client Secret Anahtarını Alma

Uygulamanızı oluşturduktan sonra, onun Client ID ve Client Secret anahtarlarını almanız gerekmektedir:

1. GitHub Developer Portalı'nda, oluşturduğunuz uygulamanın sayfasına gidin.
2. Uygulamanızın Client ID ve Client Secret anahtarlarını göreceksiniz.

## Callback URL (Geri Çağrı URL) Eklemek

OAuth2 kimlik doğrulama işlemi tamamlandığında, GitHub'dan geri çağrı almak için bir geri çağrı URL'si ayarlamalısınız. Bu, kullanıcıların doğrulama işlemi sonrasında yönlendirileceği URL'dir.

1. GitHub Developer Portalı'nda uygulamanızın sayfasına gidin.
2. "Authorization callback URL" bölümünde geri çağrı URL'sini belirleyin ve kaydedin.

## Kullanım

1. Bu depoyu yerel makinenize klonlayın.
2. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Projenin kök dizininde bir `.env` dosyası oluşturun veya `.config.js` dosyasına aşşağıdakileri gerektiği gibi doldurun.

```js
module.exports = {
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "YOUR_CALLBACK_URL",
    scopes: ["YOUR_SCOPES"], // Low level: scope: ["read:user"],
}
```
