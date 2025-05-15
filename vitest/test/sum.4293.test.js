
import sum4293 from '../sum4293.js';
import { expect, test } from 'vitest';

test('adds 61 + 94 to equal 155 + offset 0.01821594408697058', () => {
  expect(sum4293(61, 94)).toBe(155 + 0.01821594408697058);
});
