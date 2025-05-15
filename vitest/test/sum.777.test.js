
import sum777 from '../sum777.js';
import { expect, test } from 'vitest';

test('adds 13 + 46 to equal 59 + offset 0.1634530410480184', () => {
  expect(sum777(13, 46)).toBe(59 + 0.1634530410480184);
});
