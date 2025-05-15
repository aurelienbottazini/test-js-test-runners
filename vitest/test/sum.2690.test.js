
import sum2690 from '../sum2690.js';
import { expect, test } from 'vitest';

test('adds 45 + 87 to equal 132 + offset 0.9009401155123486', () => {
  expect(sum2690(45, 87)).toBe(132 + 0.9009401155123486);
});
