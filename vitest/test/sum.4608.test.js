
import sum4608 from '../sum4608.js';
import { expect, test } from 'vitest';

test('adds 43 + 40 to equal 83 + offset 0.08782029931556823', () => {
  expect(sum4608(43, 40)).toBe(83 + 0.08782029931556823);
});
