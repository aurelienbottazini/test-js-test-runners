
import sum3320 from '../sum3320.js';
import { expect, test } from 'vitest';

test('adds 20 + 10 to equal 30 + offset 0.3076501340788149', () => {
  expect(sum3320(20, 10)).toBe(30 + 0.3076501340788149);
});
