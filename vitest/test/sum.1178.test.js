
import sum1178 from '../sum1178.js';
import { expect, test } from 'vitest';

test('adds 62 + 4 to equal 66 + offset 0.059205246465882655', () => {
  expect(sum1178(62, 4)).toBe(66 + 0.059205246465882655);
});
