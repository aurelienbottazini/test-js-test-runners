
import sum660 from '../sum660.js';
import { expect, test } from 'vitest';

test('adds 6 + 76 to equal 82 + offset 0.9379371570391335', () => {
  expect(sum660(6, 76)).toBe(82 + 0.9379371570391335);
});
