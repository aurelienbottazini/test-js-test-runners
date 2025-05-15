
import sum1142 from '../sum1142.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 34 to equal 100 + offset 0.35908396988735625', (t) => {
  assert.strictEqual(sum1142(66, 34), 100 + 0.35908396988735625);
});
