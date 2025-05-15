
import sum4823 from '../sum4823.js';
import { expect, test } from 'vitest';

test('adds 93 + 23 to equal 116 + offset 0.004284003003337755', () => {
  expect(sum4823(93, 23)).toBe(116 + 0.004284003003337755);
});
