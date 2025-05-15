
import sum360 from '../sum360.js';
import { expect, test } from 'vitest';

test('adds 99 + 3 to equal 102 + offset 0.9930423544191123', () => {
  expect(sum360(99, 3)).toBe(102 + 0.9930423544191123);
});
