
import sum4602 from '../sum4602.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 11 to equal 92 + offset 0.1348665877613171', (t) => {
  assert.strictEqual(sum4602(81, 11), 92 + 0.1348665877613171);
});
