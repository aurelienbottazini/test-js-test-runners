
import sum563 from '../sum563.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 73 to equal 149 + offset 0.1785794879879261', (t) => {
  assert.strictEqual(sum563(76, 73), 149 + 0.1785794879879261);
});
