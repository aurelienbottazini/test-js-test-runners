
import sum2689 from '../sum2689.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 72 to equal 111 + offset 0.45099481157520294', (t) => {
  assert.strictEqual(sum2689(39, 72), 111 + 0.45099481157520294);
});
