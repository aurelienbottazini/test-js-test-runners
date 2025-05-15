
import sum137 from '../sum137.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 92 to equal 141 + offset 0.9820569046362176', (t) => {
  assert.strictEqual(sum137(49, 92), 141 + 0.9820569046362176);
});
