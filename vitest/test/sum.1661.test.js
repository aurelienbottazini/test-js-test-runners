
import sum1661 from '../sum1661.js';
import { expect, test } from 'vitest';

test('adds 66 + 12 to equal 78 + offset 0.4930884799591154', () => {
  expect(sum1661(66, 12)).toBe(78 + 0.4930884799591154);
});
