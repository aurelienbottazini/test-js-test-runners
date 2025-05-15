
import sum649 from '../sum649.js';
import { expect, test } from 'vitest';

test('adds 63 + 89 to equal 152 + offset 0.3480519183414429', () => {
  expect(sum649(63, 89)).toBe(152 + 0.3480519183414429);
});
