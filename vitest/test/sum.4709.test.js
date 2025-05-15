
import sum4709 from '../sum4709.js';
import { expect, test } from 'vitest';

test('adds 14 + 84 to equal 98 + offset 0.31953414363124', () => {
  expect(sum4709(14, 84)).toBe(98 + 0.31953414363124);
});
