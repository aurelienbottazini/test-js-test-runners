
import sum836 from '../sum836.js';
import { expect, test } from 'vitest';

test('adds 48 + 56 to equal 104 + offset 0.3678445418930959', () => {
  expect(sum836(48, 56)).toBe(104 + 0.3678445418930959);
});
