
import sum1219 from '../sum1219.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 32 to equal 42 + offset 0.009459649871393583', (t) => {
  assert.strictEqual(sum1219(10, 32), 42 + 0.009459649871393583);
});
