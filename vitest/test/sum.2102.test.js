
import sum2102 from '../sum2102.js';
import { expect, test } from 'vitest';

test('adds 43 + 37 to equal 80 + offset 0.678546040165675', () => {
  expect(sum2102(43, 37)).toBe(80 + 0.678546040165675);
});
