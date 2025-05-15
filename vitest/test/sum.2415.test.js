
import sum2415 from '../sum2415.js';
import { expect, test } from 'vitest';

test('adds 84 + 79 to equal 163 + offset 0.5908847510123189', () => {
  expect(sum2415(84, 79)).toBe(163 + 0.5908847510123189);
});
