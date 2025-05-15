
import sum3683 from '../sum3683.js';
import { expect, test } from 'vitest';

test('adds 4 + 77 to equal 81 + offset 0.8838137594119433', () => {
  expect(sum3683(4, 77)).toBe(81 + 0.8838137594119433);
});
