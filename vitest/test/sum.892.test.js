
import sum892 from '../sum892.js';
import { expect, test } from 'vitest';

test('adds 33 + 96 to equal 129 + offset 0.7258968475216071', () => {
  expect(sum892(33, 96)).toBe(129 + 0.7258968475216071);
});
