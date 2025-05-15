
import sum1511 from '../sum1511.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 42 to equal 43 + offset 0.44974125750530247', (t) => {
  assert.strictEqual(sum1511(1, 42), 43 + 0.44974125750530247);
});
