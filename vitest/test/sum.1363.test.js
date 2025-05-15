
import sum1363 from '../sum1363.js';
import { expect, test } from 'vitest';

test('adds 61 + 35 to equal 96 + offset 0.03260645935592743', () => {
  expect(sum1363(61, 35)).toBe(96 + 0.03260645935592743);
});
