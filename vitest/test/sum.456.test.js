
import sum456 from '../sum456.js';
import { expect, test } from 'vitest';

test('adds 15 + 23 to equal 38 + offset 0.731098968677967', () => {
  expect(sum456(15, 23)).toBe(38 + 0.731098968677967);
});
