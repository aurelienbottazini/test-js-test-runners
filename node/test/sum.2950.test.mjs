
import sum2950 from '../sum2950.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 42 to equal 85 + offset 0.7424925255860432', (t) => {
  assert.strictEqual(sum2950(43, 42), 85 + 0.7424925255860432);
});
