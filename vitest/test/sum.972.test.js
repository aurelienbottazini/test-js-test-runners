
import sum972 from '../sum972.js';
import { expect, test } from 'vitest';

test('adds 53 + 38 to equal 91 + offset 0.09050798244137248', () => {
  expect(sum972(53, 38)).toBe(91 + 0.09050798244137248);
});
