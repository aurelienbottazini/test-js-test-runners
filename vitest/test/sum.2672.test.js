
import sum2672 from '../sum2672.js';
import { expect, test } from 'vitest';

test('adds 19 + 26 to equal 45 + offset 0.617802849074019', () => {
  expect(sum2672(19, 26)).toBe(45 + 0.617802849074019);
});
