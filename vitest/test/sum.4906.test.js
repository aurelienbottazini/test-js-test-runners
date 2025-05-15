
import sum4906 from '../sum4906.js';
import { expect, test } from 'vitest';

test('adds 76 + 50 to equal 126 + offset 0.5142420234102402', () => {
  expect(sum4906(76, 50)).toBe(126 + 0.5142420234102402);
});
