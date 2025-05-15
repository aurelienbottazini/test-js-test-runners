
import sum4869 from '../sum4869.js';
import { expect, test } from 'vitest';

test('adds 91 + 69 to equal 160 + offset 0.5596368125876057', () => {
  expect(sum4869(91, 69)).toBe(160 + 0.5596368125876057);
});
