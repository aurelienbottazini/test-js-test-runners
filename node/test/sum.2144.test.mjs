
import sum2144 from '../sum2144.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 11 to equal 31 + offset 0.5651515391139805', (t) => {
  assert.strictEqual(sum2144(20, 11), 31 + 0.5651515391139805);
});
