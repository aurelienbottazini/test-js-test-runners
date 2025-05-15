
import sum4998 from '../sum4998.js';
import { expect, test } from 'vitest';

test('adds 13 + 79 to equal 92 + offset 0.3629214415274853', () => {
  expect(sum4998(13, 79)).toBe(92 + 0.3629214415274853);
});
