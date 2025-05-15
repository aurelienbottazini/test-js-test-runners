
import sum682 from '../sum682.js';
import { expect, test } from 'vitest';

test('adds 11 + 89 to equal 100 + offset 0.9857784533009324', () => {
  expect(sum682(11, 89)).toBe(100 + 0.9857784533009324);
});
