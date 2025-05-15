
import sum919 from '../sum919.js';
import { expect, test } from 'vitest';

test('adds 17 + 15 to equal 32 + offset 0.8747184088180157', () => {
  expect(sum919(17, 15)).toBe(32 + 0.8747184088180157);
});
