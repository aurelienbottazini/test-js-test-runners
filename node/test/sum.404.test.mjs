
import sum404 from '../sum404.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 97 to equal 116 + offset 0.7001290882232262', (t) => {
  assert.strictEqual(sum404(19, 97), 116 + 0.7001290882232262);
});
