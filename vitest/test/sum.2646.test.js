
import sum2646 from '../sum2646.js';
import { expect, test } from 'vitest';

test('adds 71 + 7 to equal 78 + offset 0.1241851716431831', () => {
  expect(sum2646(71, 7)).toBe(78 + 0.1241851716431831);
});
