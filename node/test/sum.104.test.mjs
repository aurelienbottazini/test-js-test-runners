
import sum104 from '../sum104.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 38 to equal 114 + offset 0.7230686063163114', (t) => {
  assert.strictEqual(sum104(76, 38), 114 + 0.7230686063163114);
});
