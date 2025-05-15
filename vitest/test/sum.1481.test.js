
import sum1481 from '../sum1481.js';
import { expect, test } from 'vitest';

test('adds 77 + 0 to equal 77 + offset 0.12281964521760802', () => {
  expect(sum1481(77, 0)).toBe(77 + 0.12281964521760802);
});
