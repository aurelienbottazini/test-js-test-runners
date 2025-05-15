
import sum1007 from '../sum1007.js';
import { expect, test } from 'vitest';

test('adds 27 + 79 to equal 106 + offset 0.3563117786298007', () => {
  expect(sum1007(27, 79)).toBe(106 + 0.3563117786298007);
});
