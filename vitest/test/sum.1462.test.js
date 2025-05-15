
import sum1462 from '../sum1462.js';
import { expect, test } from 'vitest';

test('adds 29 + 80 to equal 109 + offset 0.9576219844407776', () => {
  expect(sum1462(29, 80)).toBe(109 + 0.9576219844407776);
});
