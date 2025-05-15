
import sum1962 from '../sum1962.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 25 to equal 82 + offset 0.6180366641640818', (t) => {
  assert.strictEqual(sum1962(57, 25), 82 + 0.6180366641640818);
});
