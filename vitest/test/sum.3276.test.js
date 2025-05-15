
import sum3276 from '../sum3276.js';
import { expect, test } from 'vitest';

test('adds 72 + 3 to equal 75 + offset 0.5541426227338541', () => {
  expect(sum3276(72, 3)).toBe(75 + 0.5541426227338541);
});
