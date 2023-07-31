const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*", // 이전 페이지 경로
        destination: "/new-sexy-blog/:path*", // 새로운 페이지 경로
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies", // 원래 요청되는 경로
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, // 새로 매핑할 경로
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
