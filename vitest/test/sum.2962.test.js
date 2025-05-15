
import sum2962 from '../sum2962.js';
import { expect, test } from 'vitest';

test('adds 15 + 7 to equal 22 + offset 0.12237455172848599', () => {
  expect(sum2962(15, 7)).toBe(22 + 0.12237455172848599);
});
