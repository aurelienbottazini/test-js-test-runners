
import sum2209 from '../sum2209.js';
import { expect, test } from 'vitest';

test('adds 66 + 27 to equal 93 + offset 0.8493463048848772', () => {
  expect(sum2209(66, 27)).toBe(93 + 0.8493463048848772);
});
