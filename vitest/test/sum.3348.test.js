
import sum3348 from '../sum3348.js';
import { expect, test } from 'vitest';

test('adds 17 + 46 to equal 63 + offset 0.29234219632921765', () => {
  expect(sum3348(17, 46)).toBe(63 + 0.29234219632921765);
});
