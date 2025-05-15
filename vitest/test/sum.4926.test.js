
import sum4926 from '../sum4926.js';
import { expect, test } from 'vitest';

test('adds 44 + 87 to equal 131 + offset 0.5650881540508375', () => {
  expect(sum4926(44, 87)).toBe(131 + 0.5650881540508375);
});
