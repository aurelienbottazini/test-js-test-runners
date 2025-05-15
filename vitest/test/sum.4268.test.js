
import sum4268 from '../sum4268.js';
import { expect, test } from 'vitest';

test('adds 17 + 1 to equal 18 + offset 0.3391854158031118', () => {
  expect(sum4268(17, 1)).toBe(18 + 0.3391854158031118);
});
