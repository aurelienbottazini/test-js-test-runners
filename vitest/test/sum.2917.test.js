
import sum2917 from '../sum2917.js';
import { expect, test } from 'vitest';

test('adds 8 + 35 to equal 43 + offset 0.7409143376264589', () => {
  expect(sum2917(8, 35)).toBe(43 + 0.7409143376264589);
});
