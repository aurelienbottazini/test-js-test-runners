
import sum2333 from '../sum2333.js';
import { expect, test } from 'vitest';

test('adds 36 + 49 to equal 85 + offset 0.30056016741908986', () => {
  expect(sum2333(36, 49)).toBe(85 + 0.30056016741908986);
});
