
import sum1720 from '../sum1720.js';
import { expect, test } from 'vitest';

test('adds 1 + 48 to equal 49 + offset 0.15549961882231012', () => {
  expect(sum1720(1, 48)).toBe(49 + 0.15549961882231012);
});
