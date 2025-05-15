
import sum199 from '../sum199.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 4 to equal 72 + offset 0.8708575339993039', (t) => {
  assert.strictEqual(sum199(68, 4), 72 + 0.8708575339993039);
});
