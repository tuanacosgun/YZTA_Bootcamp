# **Takım İsmi**

Takım 12

# Ürün İle İlgili Bilgiler

## Takım Elemanları

- Zeynep Yazgan: Product Owner
- Tuana Coşgun: Scrum Master
- Sena Nur Solmaz: Team Member/Developer
- Muhammed Fatih Küçük: Team Member/Developer
- Onur Oduncu: Team Member/Developer

## Ürün İsmi

--MirrorAI--

## Ürün Açıklaması

- MirrorAI uygulamamız ile kullanıcıların internetten gördükleri kıyafetleri kendi dijital vücutları üzerinde deneyebilecekleri, dijital gardıroplarını oluşturabilecekleri ve yapay zekâdan günlük kombin önerileri alabilecekleri bir moda teknolojisi (Fashion Tech) platformu sunuyoruz. Sistem aynı zamanda kullanıcının gardırobunu öğrenerek, hava durumu ve etkinliklere göre kişiselleştirilmiş stil danışmanlığı yapmaktadır.

## Ürün Özellikleri

- Kullanıcı ölçülerine göre kişiselleştirilmiş gerçekçi 3D Dijital Avatar oluşturma
- E-ticaret linkleri üzerinden kıyafetleri analiz ederek AI Virtual Try-On (sanal deneme) sağlama
- Fotoğraf yükleyerek veya denenen ürünlerle Dijital Gardırop yönetimi
- NLP ile binlerce ürün yorumunu analiz ederek gerçek beden, kumaş kalitesi gibi Review Intelligence (Yorum Analizi) sunma
- Hava durumu ve etkinlik entegrasyonu ile AI Stil Asistanı ve Kombin Motoru

## Hedef Kitle

- Online alışveriş yapan kullanıcılar
- Moda ile ilgilenen kişiler ve stil danışmanlığı almak isteyenler
- Influencerlar ve içerik üreticileri
- Yoğun çalışan profesyoneller ve öğrenciler

## Product Backlog URL

[Miro Backlog Board](https://miro.com/app/board/uXjVH-wUJmI=/?share_link_id=981346227238)

---

# Sprint 1

- **Backlog düzeni ve Story seçimleri**: Bu sprintte tamamen ürünün fikirsel temellerinin atılmasına, sistem mimarisinin kurulmasına ve takım içi görev dağılımına odaklanılmıştır. Backlog, uygulamanın MVP'sine (V1) göre düzenlenmiş; "Avatar oluşturma", "Linkten ürün analizi" ve "Virtual Try-On" özellikleri için araştırma ve tasarım task'leri oluşturulmuştur. 

Story'ler yapılacak işlere (task'lere) bölünmüştür. Miro Board'da gözüken kırmızı item'lar yapılacak işleri (task) gösterirken, mavi item'lar story'leri temsil etmektedir.

- **Daily Scrum**: Daily Scrum toplantılarının zamansal sebeplerden ötürü Slack/Discord üzerinden yapılmasına karar verilmiştir.

- **Sprint board update**: Sprint board screenshotları: 
![Kanban Pano](bootcamp_charts/pano.png)]
![Burndown Chart](bootcamp_charts/tablo.png)]


- **Ürün Durumu**: Proje henüz geliştirme (kodlama) aşamasına geçmemiştir. Şu an sistemin Yapay Zeka Mimarisi (Computer Vision, NLP bileşenleri), Veri Modeli tasarımları ve API Yapısı kağıt üzerinde tamamlanmış, teknik fizibilite yapılmıştır.

- **Sprint Review**: 
Alınan kararlar: Ekip içi iş bölümü netleştirilmiş ve uygulamanın temel özellikleri dökümante edilmiştir. Geliştirme ortamlarının (repo, veritabanı, kullanılacak kütüphaneler) kurulması bir sonraki sprint'in ilk işi olarak belirlenmiştir. Kodlama sürecine Sprint 2 itibariyle başlanacaktır.

- **Sprint Retrospective:**
  - Projenin vizyonu, sistem mimarisi ve çözülecek problem çok net bir şekilde tanımlandı. İş bölümü başarıyla yapıldı.
  - Ekip olarak ortak toplantı saati bulmakta ve senkronize çalışmakta ciddi zorluklar yaşandı, bu nedenle geliştirme sürecine başlanamadı.
  - Bir sonraki sprint için takım üyelerinin haftalık uygunluk takvimleri önceden çıkarılıp, fix toplantı saatleri (örneğin pazar akşamları vb.) netleştirilecek. İletişim kopukluklarını engellemek için iletişim kanalları daha aktif kullanılacak.

---

# Sprint 2

- **Sprint Notları**: 
Sprint 2 sürecinde projenin temel geliştirme aşamasına geçilmesi hedeflenmiştir. Sprint 1’de belirlenen ürün fikri, hedef kitle, kullanıcı problemi ve MVP kapsamı doğrultusunda bu sprintte frontend geliştirme sürecine başlanmış; avatar, dijital gardırop, ürün görseli/link analizi ve yapay zeka destekli kombin önerisi özellikleri için teknik araştırmalara devam edilmiştir.

- **Sprint içinde tamamlanması tahmin edilen puan**: 
Sprint 2 için toplam tahmini puan: 50 puan

Puan dağılımı; frontend başlangıcı, kullanıcı profil ekranı, avatar araştırması, gardırop veri yapısı, ürün görseli/link analizi araştırması, AI kombin önerisi araştırması ve sprint dokümantasyonu başlıklarına göre yapılmıştır.

- **Puan tamamlama mantığı**: 
Sprint 2’de amaç tüm ürün fonksiyonlarını eksiksiz tamamlamak değil; ürünün çalışır MVP’ye dönüşebilmesi için gerekli temel arayüz, teknik araştırma ve veri yapısı kararlarını oluşturmaktır.

Bu nedenle Sprint 2 puanları üç ana başlık altında değerlendirilmiştir:

1. **Geliştirme işleri**  
   Frontend proje başlangıcı, ana sayfa, dashboard yapısı ve kullanıcı profil ekranı gibi somut ürün çıktıları.

2. **Araştırma ve teknik karar işleri**  
   Avatar oluşturma, virtual try-on, ürün görseli/link analizi ve AI kombin önerisi için uygulanabilir yöntemlerin araştırılması.

3. **Proje yönetimi işleri**  
   Sprint board güncellemeleri, daily scrum notları, backlog güncellemesi ve README dokümantasyonu.

  - **Backlog düzeni ve Story seçimleri**: 
Sprint 2 backlog’u, Sprint 1 sonunda belirlenen MVP hedeflerine göre yeniden düzenlenmiştir. İlk planlanan ürün kapsamı geniş olduğu için, bu sprintte öncelik son sprintte demo edilebilir bir ürün çıkarabilmeye yönelik temel işlere verilmiştir.

Story’ler yapılacak işlere/task’lere bölünmüştür. Backlog’da özellikle frontend geliştirme, kullanıcı profili, avatar yaklaşımı, dijital gardırop, ürün ekleme ve AI kombin önerisi başlıkları ayrı ayrı ele alınmıştır.

Sprint 2 için seçilen başlıca user story’ler:

| User Story | Açıklama | Öncelik | Tahmini Puan | Durum |
| --- | --- | --- | --- | --- |
| US-8 | Kullanıcı olarak uygulamanın ana sayfasını görerek ürünün amacını anlayabilmek istiyorum. | High | 5 | Devam Ediyor |
| US-9 | Kullanıcı olarak profil bilgilerimi girebileceğim bir form ekranı görmek istiyorum. | High | 5 | Planlandı |
| US-10 | Kullanıcı olarak vücut ölçülerimi girerek avatar oluşturma sürecini başlatmak istiyorum. | High | 8 | Araştırma Aşamasında |
| US-11 | Kullanıcı olarak gardırobuma kıyafet ekleyebilmek istiyorum. | High | 8 | Planlandı |
| US-12 | Kullanıcı olarak eklediğim kıyafetleri kategori bazlı görebilmek istiyorum. | Medium | 5 | Planlandı |
| US-13 | Kullanıcı olarak bir kıyafet görseli veya ürün linki ekleyebilmek istiyorum. | Medium | 8 | Araştırma Aşamasında |
| US-14 | Kullanıcı olarak yapay zekadan kombin önerisi alabilmek istiyorum. | Medium | 8 | Araştırma Aşamasında |
| US-15 | Takım olarak ürünün teknik mimarisini netleştirmek istiyoruz. | High | 3 | Devam Ediyor |

Sprint 2 için seçilen backlog item’ları:

| Backlog Item | Açıklama | Durum |
| --- | --- | --- |
| Frontend proje başlangıcı | Uygulamanın web arayüzü için temel proje yapısına başlanması | Devam Ediyor |
| Ana sayfa / landing page tasarımı | Kullanıcıya ürünün amacını anlatan ilk ekranın hazırlanması | Devam Ediyor |
| Dashboard yapısının planlanması | Kullanıcının avatar, gardırop ve kombin alanlarına ulaşacağı temel panelin tasarlanması | Planlandı |
| Profil formu alanlarının belirlenmesi | Boy, kilo, beden ve vücut ölçüsü alanlarının netleştirilmesi | Devam Ediyor |
| Avatar oluşturma yöntem araştırması | 3D avatar, placeholder avatar veya ölçülere dayalı temsil seçeneklerinin incelenmesi | Devam Ediyor |
| Gardırop veri yapısının belirlenmesi | Kıyafet adı, kategori, renk, görsel ve kaynak bilgisi gibi alanların çıkarılması | Devam Ediyor |
| Ürün linki / görsel analizi araştırması | Kullanıcının internetten ürün ekleyebilmesi için uygulanabilir yöntemlerin araştırılması | Devam Ediyor |
| AI kombin önerisi yaklaşımı | Kural tabanlı öneri, LLM destekli öneri veya hibrit yapı seçeneklerinin değerlendirilmesi | Devam Ediyor |

- **Daily Scrum**: 
Daily Scrum toplantılarının takım üyelerinin uygunluk durumuna göre çevrimiçi mesajlaşma kanalı üzerinden yapılmasına devam edilmiştir. Sprint 2’de takım henüz geliştirme sürecine tam hızda başlayamadığı için Daily Scrum notlarında özellikle frontend başlangıcı, araştırma başlıkları, görev paylaşımı ve blocker’lar takip edilmiştir.

Daily Scrum toplantılarında her takım üyesi aşağıdaki üç soruya göre ilerleme paylaşmıştır:

1. Dün ne yaptım?
2. Bugün ne yapacağım?
3. Bir engelim/blocker var mı?


---

# Sprint 3

---
