
import sum3537 from '../sum3537.js';
import { expect, test } from 'vitest';

test('adds 99 + 96 to equal 195 + offset 0.18919315634985934', () => {
  expect(sum3537(99, 96)).toBe(195 + 0.18919315634985934);
});
