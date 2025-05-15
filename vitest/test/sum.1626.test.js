
import sum1626 from '../sum1626.js';
import { expect, test } from 'vitest';

test('adds 74 + 93 to equal 167 + offset 0.38812436948899964', () => {
  expect(sum1626(74, 93)).toBe(167 + 0.38812436948899964);
});
