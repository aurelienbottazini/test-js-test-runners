
import sum1369 from '../sum1369.js';
import { expect, test } from 'vitest';

test('adds 85 + 90 to equal 175 + offset 0.3261429523093966', () => {
  expect(sum1369(85, 90)).toBe(175 + 0.3261429523093966);
});
