
import sum4465 from '../sum4465.js';
import { expect, test } from 'vitest';

test('adds 95 + 54 to equal 149 + offset 0.24520829334973582', () => {
  expect(sum4465(95, 54)).toBe(149 + 0.24520829334973582);
});
