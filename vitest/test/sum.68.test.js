
import sum68 from '../sum68.js';
import { expect, test } from 'vitest';

test('adds 76 + 94 to equal 170 + offset 0.8554644473500053', () => {
  expect(sum68(76, 94)).toBe(170 + 0.8554644473500053);
});
