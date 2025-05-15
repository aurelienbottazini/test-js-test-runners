
import sum15 from '../sum15.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 42 to equal 114 + offset 0.9710293032557018', (t) => {
  assert.strictEqual(sum15(72, 42), 114 + 0.9710293032557018);
});
