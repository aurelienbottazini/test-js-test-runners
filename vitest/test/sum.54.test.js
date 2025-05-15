
import sum54 from '../sum54.js';
import { expect, test } from 'vitest';

test('adds 93 + 36 to equal 129 + offset 0.29471671261959176', () => {
  expect(sum54(93, 36)).toBe(129 + 0.29471671261959176);
});
