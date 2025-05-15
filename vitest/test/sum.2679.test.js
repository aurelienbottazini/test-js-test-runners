
import sum2679 from '../sum2679.js';
import { expect, test } from 'vitest';

test('adds 56 + 31 to equal 87 + offset 0.9371781565975449', () => {
  expect(sum2679(56, 31)).toBe(87 + 0.9371781565975449);
});
