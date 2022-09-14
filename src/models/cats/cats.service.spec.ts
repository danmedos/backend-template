import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
  });

  describe('create', () => {
    it('success', async () => {
      const name = 'abc';
      const result = catsService.create(name);
      expect(result).toBe(`${name}b`);
    });
  });
});
