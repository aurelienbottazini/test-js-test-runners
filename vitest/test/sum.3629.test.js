
import sum3629 from '../sum3629.js';
import { expect, test } from 'vitest';

test('adds 53 + 11 to equal 64 + offset 0.7760070952875899', () => {
  expect(sum3629(53, 11)).toBe(64 + 0.7760070952875899);
});
