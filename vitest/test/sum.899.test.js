
import sum899 from '../sum899.js';
import { expect, test } from 'vitest';

test('adds 5 + 49 to equal 54 + offset 0.6066048050340681', () => {
  expect(sum899(5, 49)).toBe(54 + 0.6066048050340681);
});
