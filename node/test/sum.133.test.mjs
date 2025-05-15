
import sum133 from '../sum133.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 13 to equal 39 + offset 0.9404900168136184', (t) => {
  assert.strictEqual(sum133(26, 13), 39 + 0.9404900168136184);
});
