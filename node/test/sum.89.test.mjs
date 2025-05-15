
import sum89 from '../sum89.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 67 to equal 163 + offset 0.012158316439523809', (t) => {
  assert.strictEqual(sum89(96, 67), 163 + 0.012158316439523809);
});
