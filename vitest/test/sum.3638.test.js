
import sum3638 from '../sum3638.js';
import { expect, test } from 'vitest';

test('adds 89 + 39 to equal 128 + offset 0.645921367014279', () => {
  expect(sum3638(89, 39)).toBe(128 + 0.645921367014279);
});
