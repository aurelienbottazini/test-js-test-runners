
import sum684 from '../sum684.js';
import { expect, test } from 'vitest';

test('adds 16 + 80 to equal 96 + offset 0.22677050399905585', () => {
  expect(sum684(16, 80)).toBe(96 + 0.22677050399905585);
});
