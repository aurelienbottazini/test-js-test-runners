
import sum4734 from '../sum4734.js';
import { expect, test } from 'vitest';

test('adds 40 + 15 to equal 55 + offset 0.648218380413119', () => {
  expect(sum4734(40, 15)).toBe(55 + 0.648218380413119);
});
