
import sum1417 from '../sum1417.js';
import { expect, test } from 'vitest';

test('adds 13 + 37 to equal 50 + offset 0.3442508150725595', () => {
  expect(sum1417(13, 37)).toBe(50 + 0.3442508150725595);
});
