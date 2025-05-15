
import sum3249 from '../sum3249.js';
import { expect, test } from 'vitest';

test('adds 48 + 49 to equal 97 + offset 0.5917611816237838', () => {
  expect(sum3249(48, 49)).toBe(97 + 0.5917611816237838);
});
