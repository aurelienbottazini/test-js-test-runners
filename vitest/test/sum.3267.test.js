
import sum3267 from '../sum3267.js';
import { expect, test } from 'vitest';

test('adds 49 + 61 to equal 110 + offset 0.5411812556061364', () => {
  expect(sum3267(49, 61)).toBe(110 + 0.5411812556061364);
});
