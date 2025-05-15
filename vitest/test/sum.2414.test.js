
import sum2414 from '../sum2414.js';
import { expect, test } from 'vitest';

test('adds 36 + 18 to equal 54 + offset 0.5764025314129338', () => {
  expect(sum2414(36, 18)).toBe(54 + 0.5764025314129338);
});
