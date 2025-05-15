
import sum953 from '../sum953.js';
import { expect, test } from 'vitest';

test('adds 59 + 26 to equal 85 + offset 0.8471967041946376', () => {
  expect(sum953(59, 26)).toBe(85 + 0.8471967041946376);
});
