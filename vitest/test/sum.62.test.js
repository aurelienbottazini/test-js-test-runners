
import sum62 from '../sum62.js';
import { expect, test } from 'vitest';

test('adds 26 + 18 to equal 44 + offset 0.6504293475866166', () => {
  expect(sum62(26, 18)).toBe(44 + 0.6504293475866166);
});
