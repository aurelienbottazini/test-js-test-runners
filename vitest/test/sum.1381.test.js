
import sum1381 from '../sum1381.js';
import { expect, test } from 'vitest';

test('adds 45 + 8 to equal 53 + offset 0.9227854679810392', () => {
  expect(sum1381(45, 8)).toBe(53 + 0.9227854679810392);
});
