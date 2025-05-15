
import sum3278 from '../sum3278.js';
import { expect, test } from 'vitest';

test('adds 88 + 4 to equal 92 + offset 0.4399077436334884', () => {
  expect(sum3278(88, 4)).toBe(92 + 0.4399077436334884);
});
