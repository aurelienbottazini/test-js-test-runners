
import sum2023 from '../sum2023.js';
import { expect, test } from 'vitest';

test('adds 89 + 91 to equal 180 + offset 0.1519444188419291', () => {
  expect(sum2023(89, 91)).toBe(180 + 0.1519444188419291);
});
