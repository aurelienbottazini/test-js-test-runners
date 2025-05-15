
import sum3971 from '../sum3971.js';
import { expect, test } from 'vitest';

test('adds 76 + 20 to equal 96 + offset 0.7733420375253796', () => {
  expect(sum3971(76, 20)).toBe(96 + 0.7733420375253796);
});
