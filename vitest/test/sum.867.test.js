
import sum867 from '../sum867.js';
import { expect, test } from 'vitest';

test('adds 53 + 0 to equal 53 + offset 0.4471958853814484', () => {
  expect(sum867(53, 0)).toBe(53 + 0.4471958853814484);
});
