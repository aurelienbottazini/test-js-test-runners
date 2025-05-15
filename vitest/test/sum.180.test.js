
import sum180 from '../sum180.js';
import { expect, test } from 'vitest';

test('adds 93 + 69 to equal 162 + offset 0.9902854719350711', () => {
  expect(sum180(93, 69)).toBe(162 + 0.9902854719350711);
});
