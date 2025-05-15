
import sum2534 from '../sum2534.js';
import { expect, test } from 'vitest';

test('adds 71 + 5 to equal 76 + offset 0.4164918447385999', () => {
  expect(sum2534(71, 5)).toBe(76 + 0.4164918447385999);
});
