
import sum3284 from '../sum3284.js';
import { expect, test } from 'vitest';

test('adds 94 + 85 to equal 179 + offset 0.7419670325465051', () => {
  expect(sum3284(94, 85)).toBe(179 + 0.7419670325465051);
});
