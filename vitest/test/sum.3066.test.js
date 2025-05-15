
import sum3066 from '../sum3066.js';
import { expect, test } from 'vitest';

test('adds 69 + 47 to equal 116 + offset 0.8168981190484071', () => {
  expect(sum3066(69, 47)).toBe(116 + 0.8168981190484071);
});
