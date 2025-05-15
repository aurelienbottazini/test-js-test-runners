
import sum663 from '../sum663.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 16 to equal 46 + offset 0.4710396672909537', (t) => {
  assert.strictEqual(sum663(30, 16), 46 + 0.4710396672909537);
});
