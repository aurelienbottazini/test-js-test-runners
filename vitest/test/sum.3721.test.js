
import sum3721 from '../sum3721.js';
import { expect, test } from 'vitest';

test('adds 53 + 2 to equal 55 + offset 0.21477517189695605', () => {
  expect(sum3721(53, 2)).toBe(55 + 0.21477517189695605);
});
