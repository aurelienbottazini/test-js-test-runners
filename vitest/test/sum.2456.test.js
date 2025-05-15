
import sum2456 from '../sum2456.js';
import { expect, test } from 'vitest';

test('adds 83 + 5 to equal 88 + offset 0.7534361007610997', () => {
  expect(sum2456(83, 5)).toBe(88 + 0.7534361007610997);
});
