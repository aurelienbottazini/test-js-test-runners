
import sum2559 from '../sum2559.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 48 to equal 100 + offset 0.8399460527824103', (t) => {
  assert.strictEqual(sum2559(52, 48), 100 + 0.8399460527824103);
});
