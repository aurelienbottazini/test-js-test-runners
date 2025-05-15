
import sum3318 from '../sum3318.js';
import { expect, test } from 'vitest';

test('adds 24 + 92 to equal 116 + offset 0.09363040399923095', () => {
  expect(sum3318(24, 92)).toBe(116 + 0.09363040399923095);
});
