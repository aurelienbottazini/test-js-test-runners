
import sum770 from '../sum770.js';
import { expect, test } from 'vitest';

test('adds 66 + 6 to equal 72 + offset 0.9540790690674099', () => {
  expect(sum770(66, 6)).toBe(72 + 0.9540790690674099);
});
