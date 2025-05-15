
import sum3662 from '../sum3662.js';
import { expect, test } from 'vitest';

test('adds 24 + 97 to equal 121 + offset 0.8686684482898493', () => {
  expect(sum3662(24, 97)).toBe(121 + 0.8686684482898493);
});
