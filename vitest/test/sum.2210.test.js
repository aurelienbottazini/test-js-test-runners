
import sum2210 from '../sum2210.js';
import { expect, test } from 'vitest';

test('adds 24 + 69 to equal 93 + offset 0.053338902749123784', () => {
  expect(sum2210(24, 69)).toBe(93 + 0.053338902749123784);
});
