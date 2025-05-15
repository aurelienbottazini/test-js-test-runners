
import sum421 from '../sum421.js';
import { expect, test } from 'vitest';

test('adds 73 + 20 to equal 93 + offset 0.9539069508154772', () => {
  expect(sum421(73, 20)).toBe(93 + 0.9539069508154772);
});
