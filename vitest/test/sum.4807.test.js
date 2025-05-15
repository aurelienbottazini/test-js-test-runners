
import sum4807 from '../sum4807.js';
import { expect, test } from 'vitest';

test('adds 98 + 89 to equal 187 + offset 0.7631418533878913', () => {
  expect(sum4807(98, 89)).toBe(187 + 0.7631418533878913);
});
