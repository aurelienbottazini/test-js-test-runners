
import sum4556 from '../sum4556.js';
import { expect, test } from 'vitest';

test('adds 39 + 2 to equal 41 + offset 0.2462032270069141', () => {
  expect(sum4556(39, 2)).toBe(41 + 0.2462032270069141);
});
