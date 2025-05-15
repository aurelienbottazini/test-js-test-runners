
import sum2718 from '../sum2718.js';
import { expect, test } from 'vitest';

test('adds 21 + 6 to equal 27 + offset 0.47802166516497946', () => {
  expect(sum2718(21, 6)).toBe(27 + 0.47802166516497946);
});
