
import sum2516 from '../sum2516.js';
import { expect, test } from 'vitest';

test('adds 90 + 54 to equal 144 + offset 0.9595410332902085', () => {
  expect(sum2516(90, 54)).toBe(144 + 0.9595410332902085);
});
