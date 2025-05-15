
import sum3457 from '../sum3457.js';
import { expect, test } from 'vitest';

test('adds 24 + 53 to equal 77 + offset 0.718845731716076', () => {
  expect(sum3457(24, 53)).toBe(77 + 0.718845731716076);
});
