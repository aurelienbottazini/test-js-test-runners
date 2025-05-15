
import sum2101 from '../sum2101.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 44 to equal 143 + offset 0.6303966255071449', (t) => {
  assert.strictEqual(sum2101(99, 44), 143 + 0.6303966255071449);
});
