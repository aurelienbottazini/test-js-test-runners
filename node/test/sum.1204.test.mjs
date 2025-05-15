
import sum1204 from '../sum1204.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 88 to equal 122 + offset 0.2214172494433443', (t) => {
  assert.strictEqual(sum1204(34, 88), 122 + 0.2214172494433443);
});
