
import sum481 from '../sum481.js';
import { expect, test } from 'vitest';

test('adds 76 + 67 to equal 143 + offset 0.705818993786529', () => {
  expect(sum481(76, 67)).toBe(143 + 0.705818993786529);
});
