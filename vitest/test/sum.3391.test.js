
import sum3391 from '../sum3391.js';
import { expect, test } from 'vitest';

test('adds 24 + 44 to equal 68 + offset 0.5832681486877237', () => {
  expect(sum3391(24, 44)).toBe(68 + 0.5832681486877237);
});
