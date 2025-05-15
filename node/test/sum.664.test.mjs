
import sum664 from '../sum664.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 80 to equal 141 + offset 0.47178687568306277', (t) => {
  assert.strictEqual(sum664(61, 80), 141 + 0.47178687568306277);
});
