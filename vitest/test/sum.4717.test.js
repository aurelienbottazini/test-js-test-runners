
import sum4717 from '../sum4717.js';
import { expect, test } from 'vitest';

test('adds 12 + 31 to equal 43 + offset 0.0016650330992034057', () => {
  expect(sum4717(12, 31)).toBe(43 + 0.0016650330992034057);
});
