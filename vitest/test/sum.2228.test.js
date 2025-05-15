
import sum2228 from '../sum2228.js';
import { expect, test } from 'vitest';

test('adds 13 + 15 to equal 28 + offset 0.5242533105632752', () => {
  expect(sum2228(13, 15)).toBe(28 + 0.5242533105632752);
});
