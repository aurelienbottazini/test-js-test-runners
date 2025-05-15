
import sum2063 from '../sum2063.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 73 to equal 151 + offset 0.591288914919837', (t) => {
  assert.strictEqual(sum2063(78, 73), 151 + 0.591288914919837);
});
