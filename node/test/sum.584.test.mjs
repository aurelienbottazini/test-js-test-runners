
import sum584 from '../sum584.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 83 to equal 91 + offset 0.9689197814405025', (t) => {
  assert.strictEqual(sum584(8, 83), 91 + 0.9689197814405025);
});
