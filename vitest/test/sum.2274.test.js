
import sum2274 from '../sum2274.js';
import { expect, test } from 'vitest';

test('adds 65 + 85 to equal 150 + offset 0.6233327649661891', () => {
  expect(sum2274(65, 85)).toBe(150 + 0.6233327649661891);
});
