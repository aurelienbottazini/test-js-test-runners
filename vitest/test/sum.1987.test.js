
import sum1987 from '../sum1987.js';
import { expect, test } from 'vitest';

test('adds 23 + 20 to equal 43 + offset 0.45340174295195457', () => {
  expect(sum1987(23, 20)).toBe(43 + 0.45340174295195457);
});
