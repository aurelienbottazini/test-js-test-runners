
import sum4653 from '../sum4653.js';
import { expect, test } from 'vitest';

test('adds 32 + 0 to equal 32 + offset 0.7757313944404537', () => {
  expect(sum4653(32, 0)).toBe(32 + 0.7757313944404537);
});
