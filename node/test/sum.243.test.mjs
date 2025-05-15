
import sum243 from '../sum243.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 94 to equal 115 + offset 0.7284372434178978', (t) => {
  assert.strictEqual(sum243(21, 94), 115 + 0.7284372434178978);
});
