
import sum917 from '../sum917.js';
import { expect, test } from 'vitest';

test('adds 55 + 58 to equal 113 + offset 0.9396283530757681', () => {
  expect(sum917(55, 58)).toBe(113 + 0.9396283530757681);
});
