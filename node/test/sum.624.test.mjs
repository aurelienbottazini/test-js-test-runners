
import sum624 from '../sum624.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 24 to equal 40 + offset 0.08390796305931136', (t) => {
  assert.strictEqual(sum624(16, 24), 40 + 0.08390796305931136);
});
