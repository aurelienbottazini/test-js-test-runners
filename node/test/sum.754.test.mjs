
import sum754 from '../sum754.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 60 to equal 132 + offset 0.5494118554564307', (t) => {
  assert.strictEqual(sum754(72, 60), 132 + 0.5494118554564307);
});
