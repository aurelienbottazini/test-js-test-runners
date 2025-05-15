
import sum4310 from '../sum4310.js';
import { expect, test } from 'vitest';

test('adds 78 + 67 to equal 145 + offset 0.5962543469444844', () => {
  expect(sum4310(78, 67)).toBe(145 + 0.5962543469444844);
});
