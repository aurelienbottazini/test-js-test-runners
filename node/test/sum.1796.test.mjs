
import sum1796 from '../sum1796.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 85 to equal 132 + offset 0.7531524164730785', (t) => {
  assert.strictEqual(sum1796(47, 85), 132 + 0.7531524164730785);
});
