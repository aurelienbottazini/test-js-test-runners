
import sum2728 from '../sum2728.js';
import { expect, test } from 'vitest';

test('adds 81 + 62 to equal 143 + offset 0.5078031789400291', () => {
  expect(sum2728(81, 62)).toBe(143 + 0.5078031789400291);
});
