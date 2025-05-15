
import sum2403 from '../sum2403.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 14 to equal 81 + offset 0.5929157850427998', (t) => {
  assert.strictEqual(sum2403(67, 14), 81 + 0.5929157850427998);
});
