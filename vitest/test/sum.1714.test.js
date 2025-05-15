
import sum1714 from '../sum1714.js';
import { expect, test } from 'vitest';

test('adds 74 + 24 to equal 98 + offset 0.25056740806576405', () => {
  expect(sum1714(74, 24)).toBe(98 + 0.25056740806576405);
});
