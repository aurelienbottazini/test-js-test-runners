
import sum743 from '../sum743.js';
import { expect, test } from 'vitest';

test('adds 15 + 43 to equal 58 + offset 0.6437451775121861', () => {
  expect(sum743(15, 43)).toBe(58 + 0.6437451775121861);
});
