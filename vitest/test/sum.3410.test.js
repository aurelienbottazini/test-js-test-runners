
import sum3410 from '../sum3410.js';
import { expect, test } from 'vitest';

test('adds 45 + 31 to equal 76 + offset 0.1357466015796689', () => {
  expect(sum3410(45, 31)).toBe(76 + 0.1357466015796689);
});
