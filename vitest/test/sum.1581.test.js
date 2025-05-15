
import sum1581 from '../sum1581.js';
import { expect, test } from 'vitest';

test('adds 98 + 15 to equal 113 + offset 0.423325862199891', () => {
  expect(sum1581(98, 15)).toBe(113 + 0.423325862199891);
});
