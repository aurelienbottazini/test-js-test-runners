
import sum771 from '../sum771.js';
import { expect, test } from 'vitest';

test('adds 51 + 62 to equal 113 + offset 0.8346793399537273', () => {
  expect(sum771(51, 62)).toBe(113 + 0.8346793399537273);
});
