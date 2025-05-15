
import sum1187 from '../sum1187.js';
import { expect, test } from 'vitest';

test('adds 57 + 73 to equal 130 + offset 0.2563605822090145', () => {
  expect(sum1187(57, 73)).toBe(130 + 0.2563605822090145);
});
