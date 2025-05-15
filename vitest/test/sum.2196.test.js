
import sum2196 from '../sum2196.js';
import { expect, test } from 'vitest';

test('adds 43 + 91 to equal 134 + offset 0.25947770769201095', () => {
  expect(sum2196(43, 91)).toBe(134 + 0.25947770769201095);
});
