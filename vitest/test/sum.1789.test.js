
import sum1789 from '../sum1789.js';
import { expect, test } from 'vitest';

test('adds 38 + 49 to equal 87 + offset 0.3682675670978889', () => {
  expect(sum1789(38, 49)).toBe(87 + 0.3682675670978889);
});
