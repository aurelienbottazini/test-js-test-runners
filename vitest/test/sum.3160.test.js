
import sum3160 from '../sum3160.js';
import { expect, test } from 'vitest';

test('adds 94 + 9 to equal 103 + offset 0.33178743567015145', () => {
  expect(sum3160(94, 9)).toBe(103 + 0.33178743567015145);
});
