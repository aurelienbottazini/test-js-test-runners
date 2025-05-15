
import sum1375 from '../sum1375.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 73 to equal 140 + offset 0.8068961912115818', (t) => {
  assert.strictEqual(sum1375(67, 73), 140 + 0.8068961912115818);
});
