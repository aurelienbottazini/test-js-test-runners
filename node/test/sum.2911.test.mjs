
import sum2911 from '../sum2911.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 26 to equal 43 + offset 0.593634721262915', (t) => {
  assert.strictEqual(sum2911(17, 26), 43 + 0.593634721262915);
});
