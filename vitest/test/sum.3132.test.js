
import sum3132 from '../sum3132.js';
import { expect, test } from 'vitest';

test('adds 11 + 27 to equal 38 + offset 0.39529219165001883', () => {
  expect(sum3132(11, 27)).toBe(38 + 0.39529219165001883);
});
