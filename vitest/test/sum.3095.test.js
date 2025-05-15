
import sum3095 from '../sum3095.js';
import { expect, test } from 'vitest';

test('adds 42 + 87 to equal 129 + offset 0.5733727395419278', () => {
  expect(sum3095(42, 87)).toBe(129 + 0.5733727395419278);
});
