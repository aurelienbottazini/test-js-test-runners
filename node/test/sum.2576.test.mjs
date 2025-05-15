
import sum2576 from '../sum2576.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 84 to equal 148 + offset 0.44475436214689024', (t) => {
  assert.strictEqual(sum2576(64, 84), 148 + 0.44475436214689024);
});
