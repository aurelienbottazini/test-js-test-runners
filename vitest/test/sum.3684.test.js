
import sum3684 from '../sum3684.js';
import { expect, test } from 'vitest';

test('adds 45 + 12 to equal 57 + offset 0.40213764194622537', () => {
  expect(sum3684(45, 12)).toBe(57 + 0.40213764194622537);
});
