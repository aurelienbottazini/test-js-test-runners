
import sum2030 from '../sum2030.js';
import { expect, test } from 'vitest';

test('adds 92 + 2 to equal 94 + offset 0.786111610341731', () => {
  expect(sum2030(92, 2)).toBe(94 + 0.786111610341731);
});
