
import sum2578 from '../sum2578.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 64 to equal 103 + offset 0.6910410479089566', (t) => {
  assert.strictEqual(sum2578(39, 64), 103 + 0.6910410479089566);
});
