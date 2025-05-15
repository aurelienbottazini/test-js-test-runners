
import sum474 from '../sum474.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 10 to equal 90 + offset 0.6079558472411632', (t) => {
  assert.strictEqual(sum474(80, 10), 90 + 0.6079558472411632);
});
