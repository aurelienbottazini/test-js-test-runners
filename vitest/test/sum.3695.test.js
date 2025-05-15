
import sum3695 from '../sum3695.js';
import { expect, test } from 'vitest';

test('adds 76 + 99 to equal 175 + offset 0.12019182890001945', () => {
  expect(sum3695(76, 99)).toBe(175 + 0.12019182890001945);
});
