
import sum999 from '../sum999.js';
import { expect, test } from 'vitest';

test('adds 82 + 81 to equal 163 + offset 0.4794228641621736', () => {
  expect(sum999(82, 81)).toBe(163 + 0.4794228641621736);
});
