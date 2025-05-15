
import sum1631 from '../sum1631.js';
import { expect, test } from 'vitest';

test('adds 49 + 23 to equal 72 + offset 0.056575572596694435', () => {
  expect(sum1631(49, 23)).toBe(72 + 0.056575572596694435);
});
