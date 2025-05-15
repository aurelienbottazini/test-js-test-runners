
import sum1000 from '../sum1000.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 46 to equal 66 + offset 0.8413477633181609', (t) => {
  assert.strictEqual(sum1000(20, 46), 66 + 0.8413477633181609);
});
