
import sum3151 from '../sum3151.js';
import { expect, test } from 'vitest';

test('adds 76 + 74 to equal 150 + offset 0.7570721792855574', () => {
  expect(sum3151(76, 74)).toBe(150 + 0.7570721792855574);
});
