
import sum2585 from '../sum2585.js';
import { expect, test } from 'vitest';

test('adds 73 + 97 to equal 170 + offset 0.7380871739601196', () => {
  expect(sum2585(73, 97)).toBe(170 + 0.7380871739601196);
});
