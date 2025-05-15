
import sum4645 from '../sum4645.js';
import { expect, test } from 'vitest';

test('adds 8 + 19 to equal 27 + offset 0.10459771684179142', () => {
  expect(sum4645(8, 19)).toBe(27 + 0.10459771684179142);
});
