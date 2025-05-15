
import sum4461 from '../sum4461.js';
import { expect, test } from 'vitest';

test('adds 15 + 63 to equal 78 + offset 0.5156544448895947', () => {
  expect(sum4461(15, 63)).toBe(78 + 0.5156544448895947);
});
