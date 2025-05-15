
import sum2888 from '../sum2888.js';
import { expect, test } from 'vitest';

test('adds 6 + 96 to equal 102 + offset 0.4510765772811475', () => {
  expect(sum2888(6, 96)).toBe(102 + 0.4510765772811475);
});
