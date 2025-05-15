
import sum3503 from '../sum3503.js';
import { expect, test } from 'vitest';

test('adds 85 + 56 to equal 141 + offset 0.5176498669981149', () => {
  expect(sum3503(85, 56)).toBe(141 + 0.5176498669981149);
});
