
import sum4312 from '../sum4312.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 52 to equal 81 + offset 0.1526979111636222', (t) => {
  assert.strictEqual(sum4312(29, 52), 81 + 0.1526979111636222);
});
