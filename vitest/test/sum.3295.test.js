
import sum3295 from '../sum3295.js';
import { expect, test } from 'vitest';

test('adds 13 + 21 to equal 34 + offset 0.8731034738457559', () => {
  expect(sum3295(13, 21)).toBe(34 + 0.8731034738457559);
});
