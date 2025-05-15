
import sum4683 from '../sum4683.js';
import { expect, test } from 'vitest';

test('adds 9 + 50 to equal 59 + offset 0.9423604502230348', () => {
  expect(sum4683(9, 50)).toBe(59 + 0.9423604502230348);
});
