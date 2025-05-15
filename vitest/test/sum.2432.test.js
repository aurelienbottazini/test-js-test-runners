
import sum2432 from '../sum2432.js';
import { expect, test } from 'vitest';

test('adds 85 + 80 to equal 165 + offset 0.4684879037951135', () => {
  expect(sum2432(85, 80)).toBe(165 + 0.4684879037951135);
});
