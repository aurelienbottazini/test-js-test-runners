
import sum1411 from '../sum1411.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 87 to equal 160 + offset 0.637721270454055', (t) => {
  assert.strictEqual(sum1411(73, 87), 160 + 0.637721270454055);
});
