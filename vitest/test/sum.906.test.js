
import sum906 from '../sum906.js';
import { expect, test } from 'vitest';

test('adds 31 + 66 to equal 97 + offset 0.3598473943508944', () => {
  expect(sum906(31, 66)).toBe(97 + 0.3598473943508944);
});
