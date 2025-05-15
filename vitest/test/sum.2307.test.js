
import sum2307 from '../sum2307.js';
import { expect, test } from 'vitest';

test('adds 33 + 56 to equal 89 + offset 0.22148024929164478', () => {
  expect(sum2307(33, 56)).toBe(89 + 0.22148024929164478);
});
