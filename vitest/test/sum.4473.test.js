
import sum4473 from '../sum4473.js';
import { expect, test } from 'vitest';

test('adds 26 + 94 to equal 120 + offset 0.9406701646744797', () => {
  expect(sum4473(26, 94)).toBe(120 + 0.9406701646744797);
});
