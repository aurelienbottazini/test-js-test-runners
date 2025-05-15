
import sum2242 from '../sum2242.js';
import { expect, test } from 'vitest';

test('adds 11 + 2 to equal 13 + offset 0.3309696089444435', () => {
  expect(sum2242(11, 2)).toBe(13 + 0.3309696089444435);
});
