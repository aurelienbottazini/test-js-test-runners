
import sum4726 from '../sum4726.js';
import { expect, test } from 'vitest';

test('adds 85 + 9 to equal 94 + offset 0.49598428501890246', () => {
  expect(sum4726(85, 9)).toBe(94 + 0.49598428501890246);
});
