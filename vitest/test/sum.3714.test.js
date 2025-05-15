
import sum3714 from '../sum3714.js';
import { expect, test } from 'vitest';

test('adds 81 + 4 to equal 85 + offset 0.3639659313524689', () => {
  expect(sum3714(81, 4)).toBe(85 + 0.3639659313524689);
});
