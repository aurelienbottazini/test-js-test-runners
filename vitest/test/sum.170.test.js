
import sum170 from '../sum170.js';
import { expect, test } from 'vitest';

test('adds 58 + 90 to equal 148 + offset 0.429443016217275', () => {
  expect(sum170(58, 90)).toBe(148 + 0.429443016217275);
});
