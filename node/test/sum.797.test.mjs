
import sum797 from '../sum797.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 0 to equal 87 + offset 0.9884103700025559', (t) => {
  assert.strictEqual(sum797(87, 0), 87 + 0.9884103700025559);
});
