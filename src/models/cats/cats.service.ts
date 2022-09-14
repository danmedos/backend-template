export class CatsService {
  private readonly cats: string[] = [];

  create(name) {
    this.cats.push(name);
    return `${name}b`;
  }

  findAll(): string[] {
    return this.cats;
  }
}
