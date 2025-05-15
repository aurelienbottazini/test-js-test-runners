
import sum275 from '../sum275.js';
import { expect, test } from 'vitest';

test('adds 73 + 77 to equal 150 + offset 0.2532867462701063', () => {
  expect(sum275(73, 77)).toBe(150 + 0.2532867462701063);
});
