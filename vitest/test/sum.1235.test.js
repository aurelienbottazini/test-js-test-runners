
import sum1235 from '../sum1235.js';
import { expect, test } from 'vitest';

test('adds 1 + 61 to equal 62 + offset 0.19995113240196594', () => {
  expect(sum1235(1, 61)).toBe(62 + 0.19995113240196594);
});
