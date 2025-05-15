
import sum4550 from '../sum4550.js';
import { expect, test } from 'vitest';

test('adds 8 + 24 to equal 32 + offset 0.5137883021144337', () => {
  expect(sum4550(8, 24)).toBe(32 + 0.5137883021144337);
});
