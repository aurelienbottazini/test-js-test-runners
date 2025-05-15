
import sum1949 from '../sum1949.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 89 to equal 181 + offset 0.6609860212942363', (t) => {
  assert.strictEqual(sum1949(92, 89), 181 + 0.6609860212942363);
});
