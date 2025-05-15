
import sum4288 from '../sum4288.js';
import { expect, test } from 'vitest';

test('adds 0 + 50 to equal 50 + offset 0.25993642313959586', () => {
  expect(sum4288(0, 50)).toBe(50 + 0.25993642313959586);
});
