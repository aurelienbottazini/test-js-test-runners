
import sum1640 from '../sum1640.js';
import { expect, test } from 'vitest';

test('adds 65 + 45 to equal 110 + offset 0.3602266978933363', () => {
  expect(sum1640(65, 45)).toBe(110 + 0.3602266978933363);
});
