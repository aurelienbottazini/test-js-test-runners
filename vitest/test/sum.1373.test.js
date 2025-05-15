
import sum1373 from '../sum1373.js';
import { expect, test } from 'vitest';

test('adds 19 + 53 to equal 72 + offset 0.4363878762944714', () => {
  expect(sum1373(19, 53)).toBe(72 + 0.4363878762944714);
});
