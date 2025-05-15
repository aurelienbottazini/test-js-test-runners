
import sum4889 from '../sum4889.js';
import { expect, test } from 'vitest';

test('adds 1 + 95 to equal 96 + offset 0.4439526234152368', () => {
  expect(sum4889(1, 95)).toBe(96 + 0.4439526234152368);
});
