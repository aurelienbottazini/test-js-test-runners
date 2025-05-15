
import sum3605 from '../sum3605.js';
import { expect, test } from 'vitest';

test('adds 67 + 78 to equal 145 + offset 0.29036607580438034', () => {
  expect(sum3605(67, 78)).toBe(145 + 0.29036607580438034);
});
