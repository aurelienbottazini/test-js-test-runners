
import sum3184 from '../sum3184.js';
import { expect, test } from 'vitest';

test('adds 94 + 58 to equal 152 + offset 0.7064702288774644', () => {
  expect(sum3184(94, 58)).toBe(152 + 0.7064702288774644);
});
