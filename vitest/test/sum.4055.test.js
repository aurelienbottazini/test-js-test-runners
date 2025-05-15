
import sum4055 from '../sum4055.js';
import { expect, test } from 'vitest';

test('adds 16 + 63 to equal 79 + offset 0.5071557798116647', () => {
  expect(sum4055(16, 63)).toBe(79 + 0.5071557798116647);
});
