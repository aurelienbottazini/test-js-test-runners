
import sum4651 from '../sum4651.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 66 to equal 144 + offset 0.8340843564979119', (t) => {
  assert.strictEqual(sum4651(78, 66), 144 + 0.8340843564979119);
});
