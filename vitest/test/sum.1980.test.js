
import sum1980 from '../sum1980.js';
import { expect, test } from 'vitest';

test('adds 25 + 53 to equal 78 + offset 0.1545176425478021', () => {
  expect(sum1980(25, 53)).toBe(78 + 0.1545176425478021);
});
