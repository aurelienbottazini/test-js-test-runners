
import sum3961 from '../sum3961.js';
import { expect, test } from 'vitest';

test('adds 91 + 90 to equal 181 + offset 0.02921891699604018', () => {
  expect(sum3961(91, 90)).toBe(181 + 0.02921891699604018);
});
