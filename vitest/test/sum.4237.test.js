
import sum4237 from '../sum4237.js';
import { expect, test } from 'vitest';

test('adds 26 + 77 to equal 103 + offset 0.5113912632376998', () => {
  expect(sum4237(26, 77)).toBe(103 + 0.5113912632376998);
});
