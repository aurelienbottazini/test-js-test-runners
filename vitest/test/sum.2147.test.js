
import sum2147 from '../sum2147.js';
import { expect, test } from 'vitest';

test('adds 0 + 59 to equal 59 + offset 0.2746155106457979', () => {
  expect(sum2147(0, 59)).toBe(59 + 0.2746155106457979);
});
