
import sum2328 from '../sum2328.js';
import { expect, test } from 'vitest';

test('adds 65 + 53 to equal 118 + offset 0.8140079901377724', () => {
  expect(sum2328(65, 53)).toBe(118 + 0.8140079901377724);
});
