
import sum4861 from '../sum4861.js';
import { expect, test } from 'vitest';

test('adds 62 + 46 to equal 108 + offset 0.06231759794961478', () => {
  expect(sum4861(62, 46)).toBe(108 + 0.06231759794961478);
});
