
import sum4462 from '../sum4462.js';
import { expect, test } from 'vitest';

test('adds 97 + 92 to equal 189 + offset 0.6614485644945874', () => {
  expect(sum4462(97, 92)).toBe(189 + 0.6614485644945874);
});
