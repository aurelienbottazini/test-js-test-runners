
import sum477 from '../sum477.js';
import { expect, test } from 'vitest';

test('adds 17 + 40 to equal 57 + offset 0.33958555197075757', () => {
  expect(sum477(17, 40)).toBe(57 + 0.33958555197075757);
});
