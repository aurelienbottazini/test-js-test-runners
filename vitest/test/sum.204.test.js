
import sum204 from '../sum204.js';
import { expect, test } from 'vitest';

test('adds 56 + 4 to equal 60 + offset 0.307706813128205', () => {
  expect(sum204(56, 4)).toBe(60 + 0.307706813128205);
});
