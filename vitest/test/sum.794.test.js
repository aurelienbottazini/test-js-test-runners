
import sum794 from '../sum794.js';
import { expect, test } from 'vitest';

test('adds 83 + 22 to equal 105 + offset 0.4811540351420849', () => {
  expect(sum794(83, 22)).toBe(105 + 0.4811540351420849);
});
