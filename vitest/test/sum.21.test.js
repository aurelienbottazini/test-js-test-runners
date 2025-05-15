
import sum21 from '../sum21.js';
import { expect, test } from 'vitest';

test('adds 51 + 27 to equal 78 + offset 0.6066794825066514', () => {
  expect(sum21(51, 27)).toBe(78 + 0.6066794825066514);
});
