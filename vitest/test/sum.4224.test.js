
import sum4224 from '../sum4224.js';
import { expect, test } from 'vitest';

test('adds 54 + 57 to equal 111 + offset 0.8864976144553707', () => {
  expect(sum4224(54, 57)).toBe(111 + 0.8864976144553707);
});
