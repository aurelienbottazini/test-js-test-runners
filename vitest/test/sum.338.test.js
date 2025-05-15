
import sum338 from '../sum338.js';
import { expect, test } from 'vitest';

test('adds 61 + 24 to equal 85 + offset 0.0019036093158889544', () => {
  expect(sum338(61, 24)).toBe(85 + 0.0019036093158889544);
});
