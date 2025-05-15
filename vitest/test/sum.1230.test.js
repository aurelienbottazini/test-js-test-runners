
import sum1230 from '../sum1230.js';
import { expect, test } from 'vitest';

test('adds 98 + 73 to equal 171 + offset 0.8865491920736348', () => {
  expect(sum1230(98, 73)).toBe(171 + 0.8865491920736348);
});
