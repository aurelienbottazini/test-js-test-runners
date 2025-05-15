
import sum4308 from '../sum4308.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 93 to equal 115 + offset 0.5811369718962504', (t) => {
  assert.strictEqual(sum4308(22, 93), 115 + 0.5811369718962504);
});
