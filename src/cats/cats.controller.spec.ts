import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('success', async () => {
      const payload = {
        name: 'abc',
        age: 18,
        breed: 'ccc',
      };
      jest.spyOn(catsService, 'create').mockImplementation(() => payload.name);
      const result = catsController.create(payload);
      expect(result).toBe(payload.name);
    });
  });
});
