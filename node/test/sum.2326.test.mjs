
import sum2326 from '../sum2326.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 83 to equal 114 + offset 0.9806960077524108', (t) => {
  assert.strictEqual(sum2326(31, 83), 114 + 0.9806960077524108);
});
