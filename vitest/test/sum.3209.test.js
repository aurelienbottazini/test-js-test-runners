
import sum3209 from '../sum3209.js';
import { expect, test } from 'vitest';

test('adds 93 + 64 to equal 157 + offset 0.4626404205431849', () => {
  expect(sum3209(93, 64)).toBe(157 + 0.4626404205431849);
});
