
import sum1831 from '../sum1831.js';
import { expect, test } from 'vitest';

test('adds 97 + 49 to equal 146 + offset 0.163403711975737', () => {
  expect(sum1831(97, 49)).toBe(146 + 0.163403711975737);
});
