
import sum4596 from '../sum4596.js';
import { expect, test } from 'vitest';

test('adds 73 + 40 to equal 113 + offset 0.6120416295161125', () => {
  expect(sum4596(73, 40)).toBe(113 + 0.6120416295161125);
});
