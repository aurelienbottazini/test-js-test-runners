
import sum3569 from '../sum3569.js';
import { expect, test } from 'vitest';

test('adds 4 + 19 to equal 23 + offset 0.6387236848836987', () => {
  expect(sum3569(4, 19)).toBe(23 + 0.6387236848836987);
});
