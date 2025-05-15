
import sum3889 from '../sum3889.js';
import { expect, test } from 'vitest';

test('adds 69 + 76 to equal 145 + offset 0.3418626961186002', () => {
  expect(sum3889(69, 76)).toBe(145 + 0.3418626961186002);
});
