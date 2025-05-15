
import sum1129 from '../sum1129.js';
import { expect, test } from 'vitest';

test('adds 3 + 87 to equal 90 + offset 0.7589274770992684', () => {
  expect(sum1129(3, 87)).toBe(90 + 0.7589274770992684);
});
