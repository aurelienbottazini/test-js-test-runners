
import sum1019 from '../sum1019.js';
import { expect, test } from 'vitest';

test('adds 91 + 19 to equal 110 + offset 0.45373495488070337', () => {
  expect(sum1019(91, 19)).toBe(110 + 0.45373495488070337);
});
