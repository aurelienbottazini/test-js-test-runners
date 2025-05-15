
import sum792 from '../sum792.js';
import { expect, test } from 'vitest';

test('adds 86 + 56 to equal 142 + offset 0.8636832916201626', () => {
  expect(sum792(86, 56)).toBe(142 + 0.8636832916201626);
});
