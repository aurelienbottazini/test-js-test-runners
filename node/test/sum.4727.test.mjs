
import sum4727 from '../sum4727.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 69 to equal 158 + offset 0.1616713395073549', (t) => {
  assert.strictEqual(sum4727(89, 69), 158 + 0.1616713395073549);
});
