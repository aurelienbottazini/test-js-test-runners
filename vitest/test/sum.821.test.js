
import sum821 from '../sum821.js';
import { expect, test } from 'vitest';

test('adds 29 + 38 to equal 67 + offset 0.2512038242560938', () => {
  expect(sum821(29, 38)).toBe(67 + 0.2512038242560938);
});
