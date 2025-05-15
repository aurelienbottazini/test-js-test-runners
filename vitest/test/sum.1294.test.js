
import sum1294 from '../sum1294.js';
import { expect, test } from 'vitest';

test('adds 91 + 10 to equal 101 + offset 0.1550541912495087', () => {
  expect(sum1294(91, 10)).toBe(101 + 0.1550541912495087);
});
