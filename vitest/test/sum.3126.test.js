
import sum3126 from '../sum3126.js';
import { expect, test } from 'vitest';

test('adds 71 + 4 to equal 75 + offset 0.863939215254587', () => {
  expect(sum3126(71, 4)).toBe(75 + 0.863939215254587);
});
