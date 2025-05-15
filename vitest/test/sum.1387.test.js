
import sum1387 from '../sum1387.js';
import { expect, test } from 'vitest';

test('adds 21 + 90 to equal 111 + offset 0.17778944859913803', () => {
  expect(sum1387(21, 90)).toBe(111 + 0.17778944859913803);
});
