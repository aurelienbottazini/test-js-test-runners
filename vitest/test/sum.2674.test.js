
import sum2674 from '../sum2674.js';
import { expect, test } from 'vitest';

test('adds 28 + 10 to equal 38 + offset 0.26240576800291804', () => {
  expect(sum2674(28, 10)).toBe(38 + 0.26240576800291804);
});
