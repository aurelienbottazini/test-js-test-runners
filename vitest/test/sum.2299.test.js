
import sum2299 from '../sum2299.js';
import { expect, test } from 'vitest';

test('adds 19 + 57 to equal 76 + offset 0.7201053024282822', () => {
  expect(sum2299(19, 57)).toBe(76 + 0.7201053024282822);
});
