
import sum1452 from '../sum1452.js';
import { expect, test } from 'vitest';

test('adds 20 + 0 to equal 20 + offset 0.2724392970046099', () => {
  expect(sum1452(20, 0)).toBe(20 + 0.2724392970046099);
});
