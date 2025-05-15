
import sum3697 from '../sum3697.js';
import { expect, test } from 'vitest';

test('adds 15 + 1 to equal 16 + offset 0.42667237597932917', () => {
  expect(sum3697(15, 1)).toBe(16 + 0.42667237597932917);
});
