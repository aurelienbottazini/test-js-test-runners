
import sum3844 from '../sum3844.js';
import { expect, test } from 'vitest';

test('adds 83 + 89 to equal 172 + offset 0.34948902387372116', () => {
  expect(sum3844(83, 89)).toBe(172 + 0.34948902387372116);
});
