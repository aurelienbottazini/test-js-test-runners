
import sum4826 from '../sum4826.js';
import { expect, test } from 'vitest';

test('adds 79 + 75 to equal 154 + offset 0.6011926611826828', () => {
  expect(sum4826(79, 75)).toBe(154 + 0.6011926611826828);
});
