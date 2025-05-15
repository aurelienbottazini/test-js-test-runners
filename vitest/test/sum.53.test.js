
import sum53 from '../sum53.js';
import { expect, test } from 'vitest';

test('adds 29 + 9 to equal 38 + offset 0.40468087648520756', () => {
  expect(sum53(29, 9)).toBe(38 + 0.40468087648520756);
});
