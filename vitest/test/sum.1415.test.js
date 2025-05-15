
import sum1415 from '../sum1415.js';
import { expect, test } from 'vitest';

test('adds 89 + 4 to equal 93 + offset 0.31730541554215996', () => {
  expect(sum1415(89, 4)).toBe(93 + 0.31730541554215996);
});
