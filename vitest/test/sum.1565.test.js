
import sum1565 from '../sum1565.js';
import { expect, test } from 'vitest';

test('adds 31 + 34 to equal 65 + offset 0.41521685389134755', () => {
  expect(sum1565(31, 34)).toBe(65 + 0.41521685389134755);
});
