
import sum3345 from '../sum3345.js';
import { expect, test } from 'vitest';

test('adds 16 + 62 to equal 78 + offset 0.6150862083835382', () => {
  expect(sum3345(16, 62)).toBe(78 + 0.6150862083835382);
});
