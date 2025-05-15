
import sum4456 from '../sum4456.js';
import { expect, test } from 'vitest';

test('adds 47 + 48 to equal 95 + offset 0.7013115523327498', () => {
  expect(sum4456(47, 48)).toBe(95 + 0.7013115523327498);
});
