
import sum4326 from '../sum4326.js';
import { expect, test } from 'vitest';

test('adds 94 + 54 to equal 148 + offset 0.6782210866572908', () => {
  expect(sum4326(94, 54)).toBe(148 + 0.6782210866572908);
});
