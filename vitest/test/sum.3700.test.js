
import sum3700 from '../sum3700.js';
import { expect, test } from 'vitest';

test('adds 67 + 21 to equal 88 + offset 0.2192955776536979', () => {
  expect(sum3700(67, 21)).toBe(88 + 0.2192955776536979);
});
