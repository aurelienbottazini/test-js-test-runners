
import sum2240 from '../sum2240.js';
import { expect, test } from 'vitest';

test('adds 93 + 36 to equal 129 + offset 0.4236470303659887', () => {
  expect(sum2240(93, 36)).toBe(129 + 0.4236470303659887);
});
