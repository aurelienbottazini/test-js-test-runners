
import sum1240 from '../sum1240.js';
import { expect, test } from 'vitest';

test('adds 92 + 7 to equal 99 + offset 0.2098620879161911', () => {
  expect(sum1240(92, 7)).toBe(99 + 0.2098620879161911);
});
