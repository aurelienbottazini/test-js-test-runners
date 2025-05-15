
import sum240 from '../sum240.js';
import { expect, test } from 'vitest';

test('adds 56 + 3 to equal 59 + offset 0.5344700815780485', () => {
  expect(sum240(56, 3)).toBe(59 + 0.5344700815780485);
});
