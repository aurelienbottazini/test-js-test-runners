
import sum2740 from '../sum2740.js';
import { expect, test } from 'vitest';

test('adds 44 + 88 to equal 132 + offset 0.8025750352422024', () => {
  expect(sum2740(44, 88)).toBe(132 + 0.8025750352422024);
});
