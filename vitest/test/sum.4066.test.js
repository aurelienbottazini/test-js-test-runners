
import sum4066 from '../sum4066.js';
import { expect, test } from 'vitest';

test('adds 83 + 82 to equal 165 + offset 0.9499798245716363', () => {
  expect(sum4066(83, 82)).toBe(165 + 0.9499798245716363);
});
