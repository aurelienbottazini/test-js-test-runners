
import sum3428 from '../sum3428.js';
import { expect, test } from 'vitest';

test('adds 28 + 26 to equal 54 + offset 0.7048254864472299', () => {
  expect(sum3428(28, 26)).toBe(54 + 0.7048254864472299);
});
