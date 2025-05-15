
import sum2899 from '../sum2899.js';
import { expect, test } from 'vitest';

test('adds 83 + 2 to equal 85 + offset 0.10374698520191117', () => {
  expect(sum2899(83, 2)).toBe(85 + 0.10374698520191117);
});
