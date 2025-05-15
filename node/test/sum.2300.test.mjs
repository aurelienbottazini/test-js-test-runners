
import sum2300 from '../sum2300.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 33 to equal 36 + offset 0.9691513357653422', (t) => {
  assert.strictEqual(sum2300(3, 33), 36 + 0.9691513357653422);
});
