
import sum2630 from '../sum2630.js';
import { expect, test } from 'vitest';

test('adds 92 + 36 to equal 128 + offset 0.6452430581933573', () => {
  expect(sum2630(92, 36)).toBe(128 + 0.6452430581933573);
});
