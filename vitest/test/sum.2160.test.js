
import sum2160 from '../sum2160.js';
import { expect, test } from 'vitest';

test('adds 34 + 91 to equal 125 + offset 0.42116008424112583', () => {
  expect(sum2160(34, 91)).toBe(125 + 0.42116008424112583);
});
