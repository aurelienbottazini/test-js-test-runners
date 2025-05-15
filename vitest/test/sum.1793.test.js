
import sum1793 from '../sum1793.js';
import { expect, test } from 'vitest';

test('adds 26 + 63 to equal 89 + offset 0.5468528768243341', () => {
  expect(sum1793(26, 63)).toBe(89 + 0.5468528768243341);
});
