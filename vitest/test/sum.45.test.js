
import sum45 from '../sum45.js';
import { expect, test } from 'vitest';

test('adds 86 + 95 to equal 181 + offset 0.017212053086065215', () => {
  expect(sum45(86, 95)).toBe(181 + 0.017212053086065215);
});
