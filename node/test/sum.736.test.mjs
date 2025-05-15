
import sum736 from '../sum736.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 81 to equal 117 + offset 0.09083671539855342', (t) => {
  assert.strictEqual(sum736(36, 81), 117 + 0.09083671539855342);
});
