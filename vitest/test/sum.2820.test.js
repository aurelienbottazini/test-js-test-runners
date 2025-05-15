
import sum2820 from '../sum2820.js';
import { expect, test } from 'vitest';

test('adds 89 + 27 to equal 116 + offset 0.683545476326774', () => {
  expect(sum2820(89, 27)).toBe(116 + 0.683545476326774);
});
