
import sum4311 from '../sum4311.js';
import { expect, test } from 'vitest';

test('adds 20 + 19 to equal 39 + offset 0.7438115738335785', () => {
  expect(sum4311(20, 19)).toBe(39 + 0.7438115738335785);
});
