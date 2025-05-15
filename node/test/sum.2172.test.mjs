
import sum2172 from '../sum2172.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 82 to equal 106 + offset 0.2679781539450433', (t) => {
  assert.strictEqual(sum2172(24, 82), 106 + 0.2679781539450433);
});
