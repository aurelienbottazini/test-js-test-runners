
import sum1727 from '../sum1727.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 66 to equal 129 + offset 0.2712967758121517', (t) => {
  assert.strictEqual(sum1727(63, 66), 129 + 0.2712967758121517);
});
