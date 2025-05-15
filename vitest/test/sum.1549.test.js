
import sum1549 from '../sum1549.js';
import { expect, test } from 'vitest';

test('adds 96 + 68 to equal 164 + offset 0.035285747082644536', () => {
  expect(sum1549(96, 68)).toBe(164 + 0.035285747082644536);
});
