
import sum18 from '../sum18.js';
import { expect, test } from 'vitest';

test('adds 39 + 64 to equal 103 + offset 0.352919769988281', () => {
  expect(sum18(39, 64)).toBe(103 + 0.352919769988281);
});
