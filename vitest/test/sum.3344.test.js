
import sum3344 from '../sum3344.js';
import { expect, test } from 'vitest';

test('adds 85 + 81 to equal 166 + offset 0.8071121898952204', () => {
  expect(sum3344(85, 81)).toBe(166 + 0.8071121898952204);
});
