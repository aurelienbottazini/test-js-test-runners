
import sum1833 from '../sum1833.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 68 to equal 84 + offset 0.33433709390904365', (t) => {
  assert.strictEqual(sum1833(16, 68), 84 + 0.33433709390904365);
});
