const API_KEY = '5e757e3d-47c7-41be-9c2f-8d33b0cbf5c3';
const BASE_URL = 'https://content.guardianapis.com/search';

class NewsService {
  /**
   * Fetch category specific news from The Guardian API
   * and return summarized texts instead of full articles.
   */
  static async fetchNews(category = 'world', pageSize = 5) {
    try {
      // Kategoriye göre haberleri çek (İngiltere dışı sınırlaması kaldırıldı, tüm haberler sunuluyor)
      let url = `${BASE_URL}?lang=en&show-fields=bodyText,thumbnail&page-size=${pageSize}&api-key=${API_KEY}`;
      
      if (category) {
        url += `&section=${category}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }

      const data = await response.json();
      const results = data.response?.results || [];

      // Modüler olması ve JSON bodyText kısmının özet (summary) şekline getirilmesi
      const cleanedNews = results.map(item => {
        const fields = item.fields || {};
        const rawText = fields.bodyText || '';
        
        // Temiz bir string formatına dönüştür (satır atlamaları temizle)
        const cleanText = rawText.replace(/\s+/g, ' ').trim();

        // ÖZETLEME MANTIĞI: Cümlelere böl, ilk 3'ünü al
        let summaryText;
        const sentences = cleanText.split('. ');
        
        if (sentences.length > 3) {
          summaryText = sentences.slice(0, 3).join('. ') + '.';
        } else if (cleanText.length > 300) {
          summaryText = cleanText.substring(0, 300) + '...';
        } else {
          summaryText = cleanText;
        }

        return {
          id: item.id,
          title: item.webTitle,
          url: item.webUrl,
          thumbnail: fields.thumbnail,
          category: category,
          bodyText: summaryText, 
        };
      });

      return cleanedNews;
    } catch (error) {
      console.error('Haberler çekilirken bir hata oluştu:', error);
      return [];
    }
  }
}

export default NewsService;
