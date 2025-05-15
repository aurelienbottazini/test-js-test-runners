
import sum2556 from '../sum2556.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 78 to equal 162 + offset 0.7562243722143448', (t) => {
  assert.strictEqual(sum2556(84, 78), 162 + 0.7562243722143448);
});
