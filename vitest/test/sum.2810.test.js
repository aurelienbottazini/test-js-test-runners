
import sum2810 from '../sum2810.js';
import { expect, test } from 'vitest';

test('adds 98 + 2 to equal 100 + offset 0.23069974906252666', () => {
  expect(sum2810(98, 2)).toBe(100 + 0.23069974906252666);
});
