
import sum2045 from '../sum2045.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 24 to equal 39 + offset 0.41125326749389146', (t) => {
  assert.strictEqual(sum2045(15, 24), 39 + 0.41125326749389146);
});
