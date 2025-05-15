
import sum2834 from '../sum2834.js';
import { expect, test } from 'vitest';

test('adds 79 + 71 to equal 150 + offset 0.2237034196017864', () => {
  expect(sum2834(79, 71)).toBe(150 + 0.2237034196017864);
});
