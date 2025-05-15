
import sum296 from '../sum296.js';
import { expect, test } from 'vitest';

test('adds 45 + 39 to equal 84 + offset 0.1088333194778861', () => {
  expect(sum296(45, 39)).toBe(84 + 0.1088333194778861);
});
