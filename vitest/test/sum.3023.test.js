
import sum3023 from '../sum3023.js';
import { expect, test } from 'vitest';

test('adds 57 + 36 to equal 93 + offset 0.834105264724407', () => {
  expect(sum3023(57, 36)).toBe(93 + 0.834105264724407);
});
