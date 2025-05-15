
import sum204 from '../sum204.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 54 to equal 146 + offset 0.006201312350264332', (t) => {
  assert.strictEqual(sum204(92, 54), 146 + 0.006201312350264332);
});
