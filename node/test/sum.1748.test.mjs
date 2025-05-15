
import sum1748 from '../sum1748.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 81 to equal 131 + offset 0.44738783058725706', (t) => {
  assert.strictEqual(sum1748(50, 81), 131 + 0.44738783058725706);
});
