
import sum1607 from '../sum1607.js';
import { expect, test } from 'vitest';

test('adds 30 + 10 to equal 40 + offset 0.6303431944272745', () => {
  expect(sum1607(30, 10)).toBe(40 + 0.6303431944272745);
});
