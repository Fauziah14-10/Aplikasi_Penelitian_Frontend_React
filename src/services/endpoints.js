const endpoints = {
  penelitian: {
    getAll: '/api/penelitian',
    getById: (kd_penelitian) => `/api/penelitian/${kd_penelitian}`,
    create: '/api/penelitian/insert',
    update: (kd_penelitian) => `/api/penelitian/update/${kd_penelitian}`,
    delete: (kd_penelitian) => `/api/penelitian/delete/${kd_penelitian}`,
  },
};

export default endpoints;
