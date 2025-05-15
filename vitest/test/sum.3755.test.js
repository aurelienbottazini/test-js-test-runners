
import sum3755 from '../sum3755.js';
import { expect, test } from 'vitest';

test('adds 32 + 96 to equal 128 + offset 0.05492611880406972', () => {
  expect(sum3755(32, 96)).toBe(128 + 0.05492611880406972);
});
