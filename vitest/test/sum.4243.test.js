
import sum4243 from '../sum4243.js';
import { expect, test } from 'vitest';

test('adds 49 + 97 to equal 146 + offset 0.2281227989018041', () => {
  expect(sum4243(49, 97)).toBe(146 + 0.2281227989018041);
});
