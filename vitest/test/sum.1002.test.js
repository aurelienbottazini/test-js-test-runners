
import sum1002 from '../sum1002.js';
import { expect, test } from 'vitest';

test('adds 66 + 66 to equal 132 + offset 0.7313297653544732', () => {
  expect(sum1002(66, 66)).toBe(132 + 0.7313297653544732);
});
