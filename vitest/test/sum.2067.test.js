
import sum2067 from '../sum2067.js';
import { expect, test } from 'vitest';

test('adds 33 + 62 to equal 95 + offset 0.6407374657702061', () => {
  expect(sum2067(33, 62)).toBe(95 + 0.6407374657702061);
});
