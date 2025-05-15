
import sum4219 from '../sum4219.js';
import { expect, test } from 'vitest';

test('adds 34 + 72 to equal 106 + offset 0.6261502807347548', () => {
  expect(sum4219(34, 72)).toBe(106 + 0.6261502807347548);
});
