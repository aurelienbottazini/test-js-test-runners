
import sum2089 from '../sum2089.js';
import { expect, test } from 'vitest';

test('adds 83 + 80 to equal 163 + offset 0.406759673301045', () => {
  expect(sum2089(83, 80)).toBe(163 + 0.406759673301045);
});
