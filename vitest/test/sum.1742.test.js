
import sum1742 from '../sum1742.js';
import { expect, test } from 'vitest';

test('adds 41 + 19 to equal 60 + offset 0.13633602579571835', () => {
  expect(sum1742(41, 19)).toBe(60 + 0.13633602579571835);
});
