
import sum705 from '../sum705.js';
import { expect, test } from 'vitest';

test('adds 15 + 20 to equal 35 + offset 0.4911929885093591', () => {
  expect(sum705(15, 20)).toBe(35 + 0.4911929885093591);
});
