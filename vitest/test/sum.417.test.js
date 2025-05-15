
import sum417 from '../sum417.js';
import { expect, test } from 'vitest';

test('adds 80 + 92 to equal 172 + offset 0.07687094119646543', () => {
  expect(sum417(80, 92)).toBe(172 + 0.07687094119646543);
});
