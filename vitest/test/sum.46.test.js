
import sum46 from '../sum46.js';
import { expect, test } from 'vitest';

test('adds 80 + 97 to equal 177 + offset 0.45437243619749457', () => {
  expect(sum46(80, 97)).toBe(177 + 0.45437243619749457);
});
