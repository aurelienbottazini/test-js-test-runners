
import sum1296 from '../sum1296.js';
import { expect, test } from 'vitest';

test('adds 53 + 7 to equal 60 + offset 0.24143369846735896', () => {
  expect(sum1296(53, 7)).toBe(60 + 0.24143369846735896);
});
