
import sum1751 from '../sum1751.js';
import { expect, test } from 'vitest';

test('adds 28 + 43 to equal 71 + offset 0.6059770274075378', () => {
  expect(sum1751(28, 43)).toBe(71 + 0.6059770274075378);
});
