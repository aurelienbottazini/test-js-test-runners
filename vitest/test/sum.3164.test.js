
import sum3164 from '../sum3164.js';
import { expect, test } from 'vitest';

test('adds 11 + 96 to equal 107 + offset 0.49123472931928125', () => {
  expect(sum3164(11, 96)).toBe(107 + 0.49123472931928125);
});
