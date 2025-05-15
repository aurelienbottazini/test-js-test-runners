
import sum945 from '../sum945.js';
import { expect, test } from 'vitest';

test('adds 29 + 67 to equal 96 + offset 0.2730345300796986', () => {
  expect(sum945(29, 67)).toBe(96 + 0.2730345300796986);
});
