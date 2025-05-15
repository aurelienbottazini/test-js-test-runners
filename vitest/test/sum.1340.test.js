
import sum1340 from '../sum1340.js';
import { expect, test } from 'vitest';

test('adds 9 + 16 to equal 25 + offset 0.9683096157630859', () => {
  expect(sum1340(9, 16)).toBe(25 + 0.9683096157630859);
});
