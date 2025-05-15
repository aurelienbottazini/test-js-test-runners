
import sum704 from '../sum704.js';
import { expect, test } from 'vitest';

test('adds 70 + 87 to equal 157 + offset 0.9569798225406255', () => {
  expect(sum704(70, 87)).toBe(157 + 0.9569798225406255);
});
