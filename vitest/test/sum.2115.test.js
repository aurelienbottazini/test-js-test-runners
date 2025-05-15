
import sum2115 from '../sum2115.js';
import { expect, test } from 'vitest';

test('adds 47 + 49 to equal 96 + offset 0.6339840463116387', () => {
  expect(sum2115(47, 49)).toBe(96 + 0.6339840463116387);
});
