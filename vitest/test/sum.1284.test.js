
import sum1284 from '../sum1284.js';
import { expect, test } from 'vitest';

test('adds 11 + 88 to equal 99 + offset 0.27178761106816474', () => {
  expect(sum1284(11, 88)).toBe(99 + 0.27178761106816474);
});
