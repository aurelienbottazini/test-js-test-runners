
import sum2638 from '../sum2638.js';
import { expect, test } from 'vitest';

test('adds 43 + 77 to equal 120 + offset 0.6234547154178196', () => {
  expect(sum2638(43, 77)).toBe(120 + 0.6234547154178196);
});
