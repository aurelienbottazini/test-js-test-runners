
import sum2720 from '../sum2720.js';
import { expect, test } from 'vitest';

test('adds 18 + 65 to equal 83 + offset 0.11328334852921673', () => {
  expect(sum2720(18, 65)).toBe(83 + 0.11328334852921673);
});
