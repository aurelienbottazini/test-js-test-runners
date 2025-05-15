
import sum1015 from '../sum1015.js';
import { expect, test } from 'vitest';

test('adds 73 + 69 to equal 142 + offset 0.6359091608703874', () => {
  expect(sum1015(73, 69)).toBe(142 + 0.6359091608703874);
});
