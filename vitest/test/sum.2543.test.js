
import sum2543 from '../sum2543.js';
import { expect, test } from 'vitest';

test('adds 73 + 74 to equal 147 + offset 0.3095782160374968', () => {
  expect(sum2543(73, 74)).toBe(147 + 0.3095782160374968);
});
