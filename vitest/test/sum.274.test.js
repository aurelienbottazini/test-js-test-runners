
import sum274 from '../sum274.js';
import { expect, test } from 'vitest';

test('adds 93 + 65 to equal 158 + offset 0.03846910672653714', () => {
  expect(sum274(93, 65)).toBe(158 + 0.03846910672653714);
});
