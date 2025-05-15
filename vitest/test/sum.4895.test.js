
import sum4895 from '../sum4895.js';
import { expect, test } from 'vitest';

test('adds 88 + 26 to equal 114 + offset 0.7291731962956793', () => {
  expect(sum4895(88, 26)).toBe(114 + 0.7291731962956793);
});
