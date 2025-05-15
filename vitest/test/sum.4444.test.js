
import sum4444 from '../sum4444.js';
import { expect, test } from 'vitest';

test('adds 36 + 55 to equal 91 + offset 0.9121892723391224', () => {
  expect(sum4444(36, 55)).toBe(91 + 0.9121892723391224);
});
