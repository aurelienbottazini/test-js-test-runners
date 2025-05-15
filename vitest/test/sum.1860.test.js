
import sum1860 from '../sum1860.js';
import { expect, test } from 'vitest';

test('adds 54 + 16 to equal 70 + offset 0.726195109654884', () => {
  expect(sum1860(54, 16)).toBe(70 + 0.726195109654884);
});
