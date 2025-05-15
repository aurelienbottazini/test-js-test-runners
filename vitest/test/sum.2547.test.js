
import sum2547 from '../sum2547.js';
import { expect, test } from 'vitest';

test('adds 36 + 49 to equal 85 + offset 0.9484880945170636', () => {
  expect(sum2547(36, 49)).toBe(85 + 0.9484880945170636);
});
