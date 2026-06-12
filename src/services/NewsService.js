const API_KEY = '********-****-****-****-************';
const BASE_URL = 'https://content.guardianapis.com/search';

class NewsService {

  static async fetchNews(category = 'world', pageSize = 5) {
    try {
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

      const cleanedNews = results.map(item => {
        const fields = item.fields || {};
        const rawText = fields.bodyText || '';
        
        const cleanText = rawText.replace(/\s+/g, ' ').trim();

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
