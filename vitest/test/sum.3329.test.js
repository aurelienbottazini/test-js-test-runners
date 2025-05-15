
import sum3329 from '../sum3329.js';
import { expect, test } from 'vitest';

test('adds 65 + 81 to equal 146 + offset 0.045021345923032974', () => {
  expect(sum3329(65, 81)).toBe(146 + 0.045021345923032974);
});
