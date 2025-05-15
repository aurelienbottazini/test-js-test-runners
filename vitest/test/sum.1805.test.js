
import sum1805 from '../sum1805.js';
import { expect, test } from 'vitest';

test('adds 96 + 54 to equal 150 + offset 0.9314373214373568', () => {
  expect(sum1805(96, 54)).toBe(150 + 0.9314373214373568);
});
