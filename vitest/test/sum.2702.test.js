
import sum2702 from '../sum2702.js';
import { expect, test } from 'vitest';

test('adds 66 + 1 to equal 67 + offset 0.4137501451282055', () => {
  expect(sum2702(66, 1)).toBe(67 + 0.4137501451282055);
});
