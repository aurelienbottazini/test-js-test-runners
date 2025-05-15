
import sum2965 from '../sum2965.js';
import { expect, test } from 'vitest';

test('adds 18 + 12 to equal 30 + offset 0.37985127511910655', () => {
  expect(sum2965(18, 12)).toBe(30 + 0.37985127511910655);
});
