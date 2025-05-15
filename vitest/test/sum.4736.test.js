
import sum4736 from '../sum4736.js';
import { expect, test } from 'vitest';

test('adds 13 + 34 to equal 47 + offset 0.3470783400501244', () => {
  expect(sum4736(13, 34)).toBe(47 + 0.3470783400501244);
});
