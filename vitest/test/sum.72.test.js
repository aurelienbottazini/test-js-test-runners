
import sum72 from '../sum72.js';
import { expect, test } from 'vitest';

test('adds 96 + 36 to equal 132 + offset 0.8735883778801232', () => {
  expect(sum72(96, 36)).toBe(132 + 0.8735883778801232);
});
