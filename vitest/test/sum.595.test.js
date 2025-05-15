
import sum595 from '../sum595.js';
import { expect, test } from 'vitest';

test('adds 90 + 36 to equal 126 + offset 0.4898984178563146', () => {
  expect(sum595(90, 36)).toBe(126 + 0.4898984178563146);
});
