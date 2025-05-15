
import sum221 from '../sum221.js';
import { expect, test } from 'vitest';

test('adds 61 + 23 to equal 84 + offset 0.578088188563304', () => {
  expect(sum221(61, 23)).toBe(84 + 0.578088188563304);
});
