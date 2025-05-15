
import sum2005 from '../sum2005.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 6 to equal 101 + offset 0.5065708627467487', (t) => {
  assert.strictEqual(sum2005(95, 6), 101 + 0.5065708627467487);
});
