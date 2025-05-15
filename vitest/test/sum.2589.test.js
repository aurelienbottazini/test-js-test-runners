
import sum2589 from '../sum2589.js';
import { expect, test } from 'vitest';

test('adds 36 + 0 to equal 36 + offset 0.18557625294900237', () => {
  expect(sum2589(36, 0)).toBe(36 + 0.18557625294900237);
});
