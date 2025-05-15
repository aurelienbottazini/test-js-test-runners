
import sum19 from '../sum19.js';
import { expect, test } from 'vitest';

test('adds 99 + 6 to equal 105 + offset 0.049732313733597544', () => {
  expect(sum19(99, 6)).toBe(105 + 0.049732313733597544);
});
