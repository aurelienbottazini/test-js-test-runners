
import sum2019 from '../sum2019.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 42 to equal 50 + offset 0.15554039102343908', (t) => {
  assert.strictEqual(sum2019(8, 42), 50 + 0.15554039102343908);
});
