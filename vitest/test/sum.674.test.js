
import sum674 from '../sum674.js';
import { expect, test } from 'vitest';

test('adds 41 + 22 to equal 63 + offset 0.9296296311225363', () => {
  expect(sum674(41, 22)).toBe(63 + 0.9296296311225363);
});
