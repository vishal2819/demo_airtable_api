import SyncService from '../services/syncService.js';

export const syncAll = async (req, res, next) => {
  try {
    const results = await Promise.all([
      SyncService.syncPeople(),
      SyncService.syncCities(),
      SyncService.syncCompanies()
    ]);
    
    res.json({
      success: true,
      results: {
        people: results[0],
        cities: results[1],
        companies: results[2]
      }
    });
  } catch (error) {
    next(error);
  }
};

export const syncPeople = async (req, res, next) => {
  try {
    const result = await SyncService.syncPeople();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const syncCities = async (req, res, next) => {
  try {
    const result = await SyncService.syncCities();
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const syncCompanies = async (req, res, next) => {
  try {
    const result = await SyncService.syncCompanies();
    res.json(result);
  } catch (error) {
    next(error);
  }
}; 