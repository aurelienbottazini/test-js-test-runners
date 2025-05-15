
import sum3979 from '../sum3979.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 93 to equal 120 + offset 0.969761409617722', (t) => {
  assert.strictEqual(sum3979(27, 93), 120 + 0.969761409617722);
});
