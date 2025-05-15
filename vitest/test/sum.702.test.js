
import sum702 from '../sum702.js';
import { expect, test } from 'vitest';

test('adds 13 + 14 to equal 27 + offset 0.8127685586465563', () => {
  expect(sum702(13, 14)).toBe(27 + 0.8127685586465563);
});
