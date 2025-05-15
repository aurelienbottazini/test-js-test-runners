
import sum4379 from '../sum4379.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 35 to equal 76 + offset 0.7820844627292965', (t) => {
  assert.strictEqual(sum4379(41, 35), 76 + 0.7820844627292965);
});
