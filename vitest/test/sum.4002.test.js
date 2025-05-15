
import sum4002 from '../sum4002.js';
import { expect, test } from 'vitest';

test('adds 8 + 9 to equal 17 + offset 0.6808237436444028', () => {
  expect(sum4002(8, 9)).toBe(17 + 0.6808237436444028);
});
