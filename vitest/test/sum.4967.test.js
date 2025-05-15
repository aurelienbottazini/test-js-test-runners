
import sum4967 from '../sum4967.js';
import { expect, test } from 'vitest';

test('adds 96 + 20 to equal 116 + offset 0.06274555173626084', () => {
  expect(sum4967(96, 20)).toBe(116 + 0.06274555173626084);
});
