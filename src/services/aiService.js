import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

// TensorFlow'un hazır olduğundan emin olmak için başlatma fonksiyonu
export const initTensorFlow = async () => {
    await tf.ready();
    console.log("TensorFlow.js hazır!");
};

/**
 * 1. Kullanıcı Başarı Tahmini (TensorFlow Regresyon Modeli)
 */
export const predictNextQuizScore = async (streakDays, totalWordsLearned) => {
    // TensorFlow'un tam olarak başlatılmasını bekle
    await tf.ready();
    await tf.setBackend('cpu');

    // 1. Eğitim Verileri (X: [Streak, Words], Y: [Score])
    // Kodundaki yorum satırındaki xs ve ys değerlerini tensörlere çeviriyoruz
    const xs = tf.tensor2d([
        [0, 5], [1, 10], [2, 20], [3, 40], [5, 80], [7, 120], [10, 150], [14, 200]
    ]);
    const ys = tf.tensor2d([
        [30], [40], [50], [60], [75], [85], [92], [98]
    ]);

    // 2. Model Yapısı Tasarımı (Basit bir Sinir Ağı)
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [2] })); // 2 giriş (streak, words), 1 çıkış (score)

    // 3. Modeli Derleme (Optimizer ve Kayıp Fonksiyonu)
    model.compile({
        optimizer: tf.train.adam(0.1),
        loss: 'meanSquaredError'
    });

    // 4. Modeli Eğit (Hızlıca 50 epoch eğitiyoruz)
    await model.fit(xs, ys, { epochs: 50, verbose: 0 });

    // 5. Tahmin Yapma
    const inputTensor = tf.tensor2d([[streakDays, totalWordsLearned]]);
    const prediction = model.predict(inputTensor);

    // Veriyi tensörden normal sayıya geri çıkarma
    const predictionData = await prediction.data();
    const finalScore = Math.min(100, Math.max(0, Math.round(predictionData[0])));

    // Bellek temizliği (Hafıza sızıntısını önlemek için tensörleri siliyoruz)
    xs.dispose();
    ys.dispose();
    inputTensor.dispose();
    prediction.dispose();
    model.dispose();

    return finalScore;
};

/**
 * 2. Unutma Eğrisi Tahmini (Ebbinghaus Modeli - Yapay Zeka Yaklaşımı)
 */
export const predictForgettingCurve = async (daysSinceLearned) => {
    await tf.ready();
    await tf.setBackend('cpu');
    // Gün değerleri (X) ve Hatırlanma oranları (Y)
    const xs = tf.tensor2d([[0], [1], [2], [3], [5], [7], [10], [14], [20], [30]]);
    const ys = tf.tensor2d([[1.0], [0.8], [0.6], [0.5], [0.4], [0.3], [0.2], [0.15], [0.1], [0.05]]);

    // Doğrusal olmayan (Ebbinghaus) eğrisini öğrenmesi için 2 katmanlı derin bir ağ
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 8, activation: 'sigmoid', inputShape: [1] }));
    model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' })); // Çıkış 0 ile 1 arasında olsun diye sigmoid

    model.compile({
        optimizer: tf.train.adam(0.05),
        loss: 'meanSquaredError'
    });

    await model.fit(xs, ys, { epochs: 60, verbose: 0 });

    const inputTensor = tf.tensor2d([[daysSinceLearned]]);
    const prediction = model.predict(inputTensor);
    const predictionData = await prediction.data();
    const retention = Math.min(1.0, Math.max(0.0, predictionData[0]));

    // Bellek temizliği
    xs.dispose();
    ys.dispose();
    inputTensor.dispose();
    prediction.dispose();
    model.dispose();

    return retention;
};