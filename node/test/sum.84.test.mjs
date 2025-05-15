
import sum84 from '../sum84.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 79 to equal 160 + offset 0.6828379272833952', (t) => {
  assert.strictEqual(sum84(81, 79), 160 + 0.6828379272833952);
});
