
import sum1662 from '../sum1662.js';
import { expect, test } from 'vitest';

test('adds 89 + 20 to equal 109 + offset 0.059425812360502706', () => {
  expect(sum1662(89, 20)).toBe(109 + 0.059425812360502706);
});
