
import sum4136 from '../sum4136.js';
import { expect, test } from 'vitest';

test('adds 9 + 84 to equal 93 + offset 0.7816154988838523', () => {
  expect(sum4136(9, 84)).toBe(93 + 0.7816154988838523);
});
