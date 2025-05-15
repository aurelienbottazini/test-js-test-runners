
import sum2595 from '../sum2595.js';
import { expect, test } from 'vitest';

test('adds 51 + 76 to equal 127 + offset 0.5990279760821796', () => {
  expect(sum2595(51, 76)).toBe(127 + 0.5990279760821796);
});
