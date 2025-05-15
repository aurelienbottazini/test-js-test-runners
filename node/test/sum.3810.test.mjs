
import sum3810 from '../sum3810.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 28 to equal 42 + offset 0.2044061847794063', (t) => {
  assert.strictEqual(sum3810(14, 28), 42 + 0.2044061847794063);
});
