
import sum3387 from '../sum3387.js';
import { expect, test } from 'vitest';

test('adds 58 + 52 to equal 110 + offset 0.9687033768342209', () => {
  expect(sum3387(58, 52)).toBe(110 + 0.9687033768342209);
});
