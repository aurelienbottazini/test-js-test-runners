
import sum3592 from '../sum3592.js';
import { expect, test } from 'vitest';

test('adds 86 + 44 to equal 130 + offset 0.3451420021653431', () => {
  expect(sum3592(86, 44)).toBe(130 + 0.3451420021653431);
});
