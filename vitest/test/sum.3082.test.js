
import sum3082 from '../sum3082.js';
import { expect, test } from 'vitest';

test('adds 84 + 16 to equal 100 + offset 0.24531445567196153', () => {
  expect(sum3082(84, 16)).toBe(100 + 0.24531445567196153);
});
