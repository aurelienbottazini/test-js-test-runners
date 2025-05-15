
import sum1710 from '../sum1710.js';
import { expect, test } from 'vitest';

test('adds 14 + 79 to equal 93 + offset 0.5530698750181036', () => {
  expect(sum1710(14, 79)).toBe(93 + 0.5530698750181036);
});
