
import sum4047 from '../sum4047.js';
import { expect, test } from 'vitest';

test('adds 63 + 98 to equal 161 + offset 0.2617896932128413', () => {
  expect(sum4047(63, 98)).toBe(161 + 0.2617896932128413);
});
