
import sum4901 from '../sum4901.js';
import { expect, test } from 'vitest';

test('adds 99 + 6 to equal 105 + offset 0.45008690544558405', () => {
  expect(sum4901(99, 6)).toBe(105 + 0.45008690544558405);
});
