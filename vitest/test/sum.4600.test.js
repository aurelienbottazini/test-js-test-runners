
import sum4600 from '../sum4600.js';
import { expect, test } from 'vitest';

test('adds 79 + 2 to equal 81 + offset 0.7907073512263083', () => {
  expect(sum4600(79, 2)).toBe(81 + 0.7907073512263083);
});
