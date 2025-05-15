
import sum757 from '../sum757.js';
import { expect, test } from 'vitest';

test('adds 72 + 21 to equal 93 + offset 0.3311389490904013', () => {
  expect(sum757(72, 21)).toBe(93 + 0.3311389490904013);
});
