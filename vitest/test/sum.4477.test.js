
import sum4477 from '../sum4477.js';
import { expect, test } from 'vitest';

test('adds 7 + 24 to equal 31 + offset 0.9898884074057561', () => {
  expect(sum4477(7, 24)).toBe(31 + 0.9898884074057561);
});
