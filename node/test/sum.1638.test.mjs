
import sum1638 from '../sum1638.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 3 to equal 18 + offset 0.693731977356935', (t) => {
  assert.strictEqual(sum1638(15, 3), 18 + 0.693731977356935);
});
