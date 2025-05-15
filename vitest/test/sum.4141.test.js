
import sum4141 from '../sum4141.js';
import { expect, test } from 'vitest';

test('adds 68 + 87 to equal 155 + offset 0.7234234618715528', () => {
  expect(sum4141(68, 87)).toBe(155 + 0.7234234618715528);
});
