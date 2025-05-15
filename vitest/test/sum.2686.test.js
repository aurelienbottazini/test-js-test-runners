
import sum2686 from '../sum2686.js';
import { expect, test } from 'vitest';

test('adds 41 + 78 to equal 119 + offset 0.7972584230299232', () => {
  expect(sum2686(41, 78)).toBe(119 + 0.7972584230299232);
});
