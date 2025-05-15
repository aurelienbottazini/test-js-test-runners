
import sum249 from '../sum249.js';
import { expect, test } from 'vitest';

test('adds 0 + 20 to equal 20 + offset 0.23547029916691997', () => {
  expect(sum249(0, 20)).toBe(20 + 0.23547029916691997);
});
