
import sum888 from '../sum888.js';
import { expect, test } from 'vitest';

test('adds 26 + 28 to equal 54 + offset 0.3816839961970966', () => {
  expect(sum888(26, 28)).toBe(54 + 0.3816839961970966);
});
