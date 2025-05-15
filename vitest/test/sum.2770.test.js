
import sum2770 from '../sum2770.js';
import { expect, test } from 'vitest';

test('adds 71 + 18 to equal 89 + offset 0.5830961525665911', () => {
  expect(sum2770(71, 18)).toBe(89 + 0.5830961525665911);
});
