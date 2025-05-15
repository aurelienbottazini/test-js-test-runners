
import sum2866 from '../sum2866.js';
import { expect, test } from 'vitest';

test('adds 52 + 66 to equal 118 + offset 0.4532692860541001', () => {
  expect(sum2866(52, 66)).toBe(118 + 0.4532692860541001);
});
