
import sum1698 from '../sum1698.js';
import { expect, test } from 'vitest';

test('adds 23 + 26 to equal 49 + offset 0.4648639374817789', () => {
  expect(sum1698(23, 26)).toBe(49 + 0.4648639374817789);
});
