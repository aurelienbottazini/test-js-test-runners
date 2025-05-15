
import sum3746 from '../sum3746.js';
import { expect, test } from 'vitest';

test('adds 27 + 87 to equal 114 + offset 0.9383541121752534', () => {
  expect(sum3746(27, 87)).toBe(114 + 0.9383541121752534);
});
