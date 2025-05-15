
import sum1673 from '../sum1673.js';
import { expect, test } from 'vitest';

test('adds 86 + 10 to equal 96 + offset 0.8971576840311978', () => {
  expect(sum1673(86, 10)).toBe(96 + 0.8971576840311978);
});
