
import sum2078 from '../sum2078.js';
import { expect, test } from 'vitest';

test('adds 93 + 75 to equal 168 + offset 0.255343725958885', () => {
  expect(sum2078(93, 75)).toBe(168 + 0.255343725958885);
});
