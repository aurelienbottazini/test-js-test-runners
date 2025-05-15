
import sum2985 from '../sum2985.js';
import { expect, test } from 'vitest';

test('adds 90 + 36 to equal 126 + offset 0.10706885186298876', () => {
  expect(sum2985(90, 36)).toBe(126 + 0.10706885186298876);
});
