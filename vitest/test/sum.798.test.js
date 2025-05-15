
import sum798 from '../sum798.js';
import { expect, test } from 'vitest';

test('adds 3 + 76 to equal 79 + offset 0.07571206646153761', () => {
  expect(sum798(3, 76)).toBe(79 + 0.07571206646153761);
});
