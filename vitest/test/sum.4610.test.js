
import sum4610 from '../sum4610.js';
import { expect, test } from 'vitest';

test('adds 33 + 31 to equal 64 + offset 0.21058001444138152', () => {
  expect(sum4610(33, 31)).toBe(64 + 0.21058001444138152);
});
