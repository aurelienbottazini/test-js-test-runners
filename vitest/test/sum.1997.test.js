
import sum1997 from '../sum1997.js';
import { expect, test } from 'vitest';

test('adds 96 + 46 to equal 142 + offset 0.14366932412901345', () => {
  expect(sum1997(96, 46)).toBe(142 + 0.14366932412901345);
});
