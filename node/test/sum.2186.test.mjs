
import sum2186 from '../sum2186.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 88 to equal 152 + offset 0.630592573313338', (t) => {
  assert.strictEqual(sum2186(64, 88), 152 + 0.630592573313338);
});
