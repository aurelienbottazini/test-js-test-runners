
import sum4215 from '../sum4215.js';
import { expect, test } from 'vitest';

test('adds 69 + 95 to equal 164 + offset 0.5456241113679148', () => {
  expect(sum4215(69, 95)).toBe(164 + 0.5456241113679148);
});
