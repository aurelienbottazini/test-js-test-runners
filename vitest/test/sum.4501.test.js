
import sum4501 from '../sum4501.js';
import { expect, test } from 'vitest';

test('adds 14 + 28 to equal 42 + offset 0.05751089924454644', () => {
  expect(sum4501(14, 28)).toBe(42 + 0.05751089924454644);
});
