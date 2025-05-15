
import sum1978 from '../sum1978.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 77 to equal 95 + offset 0.24366782062712833', (t) => {
  assert.strictEqual(sum1978(18, 77), 95 + 0.24366782062712833);
});
