
import sum2863 from '../sum2863.js';
import { expect, test } from 'vitest';

test('adds 5 + 70 to equal 75 + offset 0.4404965391603315', () => {
  expect(sum2863(5, 70)).toBe(75 + 0.4404965391603315);
});
