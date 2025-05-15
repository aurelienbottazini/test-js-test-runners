
import sum2213 from '../sum2213.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 84 to equal 145 + offset 0.01333335311002748', (t) => {
  assert.strictEqual(sum2213(61, 84), 145 + 0.01333335311002748);
});
