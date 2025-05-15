
import sum517 from '../sum517.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 97 to equal 101 + offset 0.1816945425737363', (t) => {
  assert.strictEqual(sum517(4, 97), 101 + 0.1816945425737363);
});
