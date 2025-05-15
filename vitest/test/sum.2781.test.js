
import sum2781 from '../sum2781.js';
import { expect, test } from 'vitest';

test('adds 93 + 21 to equal 114 + offset 0.7612733964272903', () => {
  expect(sum2781(93, 21)).toBe(114 + 0.7612733964272903);
});
