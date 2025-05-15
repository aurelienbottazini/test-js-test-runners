
import sum5 from '../sum5.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 57 to equal 64 + offset 0.26123356782529084', (t) => {
  assert.strictEqual(sum5(7, 57), 64 + 0.26123356782529084);
});
