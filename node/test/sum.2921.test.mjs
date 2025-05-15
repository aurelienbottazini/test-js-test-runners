
import sum2921 from '../sum2921.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 49 to equal 129 + offset 0.1969595555385032', (t) => {
  assert.strictEqual(sum2921(80, 49), 129 + 0.1969595555385032);
});
