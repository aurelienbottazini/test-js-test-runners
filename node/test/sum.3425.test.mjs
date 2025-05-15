
import sum3425 from '../sum3425.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 6 to equal 78 + offset 0.7934296595435892', (t) => {
  assert.strictEqual(sum3425(72, 6), 78 + 0.7934296595435892);
});
