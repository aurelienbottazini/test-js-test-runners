
import sum4697 from '../sum4697.js';
import { expect, test } from 'vitest';

test('adds 4 + 27 to equal 31 + offset 0.38713981826928745', () => {
  expect(sum4697(4, 27)).toBe(31 + 0.38713981826928745);
});
