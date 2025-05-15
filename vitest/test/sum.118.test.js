
import sum118 from '../sum118.js';
import { expect, test } from 'vitest';

test('adds 78 + 1 to equal 79 + offset 0.8664258824697354', () => {
  expect(sum118(78, 1)).toBe(79 + 0.8664258824697354);
});
