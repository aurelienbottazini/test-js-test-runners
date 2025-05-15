
import sum1799 from '../sum1799.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 24 to equal 57 + offset 0.4736608357637735', (t) => {
  assert.strictEqual(sum1799(33, 24), 57 + 0.4736608357637735);
});
