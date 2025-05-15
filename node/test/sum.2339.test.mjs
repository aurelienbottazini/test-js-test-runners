
import sum2339 from '../sum2339.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 49 to equal 144 + offset 0.9601662747896987', (t) => {
  assert.strictEqual(sum2339(95, 49), 144 + 0.9601662747896987);
});
