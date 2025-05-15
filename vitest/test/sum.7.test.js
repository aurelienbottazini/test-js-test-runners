
import sum7 from '../sum7.js';
import { expect, test } from 'vitest';

test('adds 33 + 39 to equal 72 + offset 0.9595387897743475', () => {
  expect(sum7(33, 39)).toBe(72 + 0.9595387897743475);
});
