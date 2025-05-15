
import sum3407 from '../sum3407.js';
import { expect, test } from 'vitest';

test('adds 83 + 3 to equal 86 + offset 0.7126341336099227', () => {
  expect(sum3407(83, 3)).toBe(86 + 0.7126341336099227);
});
